"use client"

import { ShelterSkinTeamDossier } from "../../../../../shelter-skin-team-dossier/components/shelter-skin-team-dossier"

export default function ComponentLivePreview() {
  return (
    <div className="w-full min-h-screen bg-[#9ebfd8] flex items-center justify-center p-4 sm:p-8">
      <ShelterSkinTeamDossier initialMemberId="carissa" showMemberSwitcher={true} />
    </div>
  )
}
