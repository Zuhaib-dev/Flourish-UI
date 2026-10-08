import ContributionSkyline from "@/components/ui/contribution-skyline";

async function getContributions(username: string) {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return undefined;
    const html = await res.text();

    const tdRegex = /<td[^>]*data-date="([^"]+)"[^>]*id="([^"]+)"[^>]*>/g;
    const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;

    const cells: Record<string, string> = {};
    let match;
    while ((match = tdRegex.exec(html)) !== null) {
      cells[match[2]] = match[1]; // id -> date
    }

    const data: { date: string; count: number }[] = [];
    while ((match = tooltipRegex.exec(html)) !== null) {
      const id = match[1];
      const text = match[2];
      const date = cells[id];
      if (date) {
        let count = 0;
        if (!text.toLowerCase().includes("no contributions")) {
          const numMatch = text.match(/^([\d,]+)/);
          if (numMatch) {
            count = parseInt(numMatch[1].replace(/,/g, ""), 10);
          }
        }
        data.push({ date, count });
      }
    }

    return data.length > 0 ? data : undefined;
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return undefined;
  }
}

export default async function Demo() {
  const data = await getContributions("zuhaib-dev");
  const endDate = data && data.length > 0 ? data[data.length - 1].date : undefined;
  const total = data ? data.reduce((sum, day) => sum + day.count, 0) : 0;

  return (
    <div className="min-h-screen w-full bg-background px-4 py-10 sm:px-8 flex items-center justify-center">
      <div className="mx-auto w-full max-w-[980px]">
        <ContributionSkyline 
          data={data} 
          endDate={endDate}
          title={
            <>
              <span className="font-semibold tabular-nums">{total.toLocaleString()}</span> contributions in the last year by <span className="font-semibold">Zuhaib Rashid</span>
            </>
          }
        />
      </div>
    </div>
  );
}
