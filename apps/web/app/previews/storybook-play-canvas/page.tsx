"use client"

import StorybookPlayCanvas from "../../../../../storybook-play-canvas/components/ui/storybook-play-canvas"

export default function ComponentLivePreview() {
  return (
    <StorybookPlayCanvas
      characterName="Nessa"
      story="Nessa is very shy and always hides herself behind her mask. Behind the mask is someone very helpful and kind."
      palette={['#a43c45', '#5c70a0', '#6d5367', '#36685d', '#d7c37a']}
      defaultColor="#a43c45"
      defaultBrushSize={6}
    />
  )
}
