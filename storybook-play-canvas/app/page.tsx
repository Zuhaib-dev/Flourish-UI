'use client'

import StorybookPlayCanvas from '@/components/ui/storybook-play-canvas'

export default function Page() {
  return (
    <StorybookPlayCanvas
      headline={`NESSA   HAS   BUILT A\nHOUSE FOR\nTHE ANIMALS`}
      characterName="Nessa"
      story="Nessa is very shy and always hides herself behind her mask. Behind the mask is someone very helpful and kind."
      wordmark="woset"
      palette={['#a43c45', '#5c70a0', '#6d5367', '#36685d', '#d7c37a']}
      defaultColor="#a43c45"
      defaultBrushSize={6}
    />
  )
}


      
