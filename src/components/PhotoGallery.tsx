import { useState } from 'react'
import '../App.css'

type PhotoItem = {
  src: string
  comment: string
}

const photoModules = import.meta.glob('../../public/photo/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const photoItems = Object.entries(photoModules)
  .filter(([path]) => !path.includes('favicon'))
  .map(([path, url]) => {
    const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '撮影写真'
    const comment = fileName.replace(/[-_]+/g, ' ').trim() || '撮影写真'

    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
    const normalizedPath = url
      .replace(/^\/+/, '')
      .replace(/^public\//, '')
      .replace(/\?url$/, '')
      .replace(new RegExp(`^${basePath.replace(/^\//, '')}/`), '')

    return {
      src: `${basePath}/${normalizedPath}`,
      comment,
    } satisfies PhotoItem
  })

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)

  if (photoItems.length === 0) {
    return <p className="muted">写真がまだ登録されていません。</p>
  }

  return (
    <div>
      <div className="photo-gallery">
        {photoItems.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            className="photo-card"
            onClick={() => setSelectedPhoto(photo)}
            aria-label={`写真を拡大表示: ${photo.comment}`}
          >
            <img src={photo.src} alt={photo.comment} className="photo-card-image" loading="lazy" />
            <span className="photo-card-caption">{photo.comment}</span>
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div className="modal-backdrop photo-preview-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="modal photo-preview-modal" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.comment} className="photo-preview-image" />
            <p className="photo-preview-caption">{selectedPhoto.comment}</p>
            <button className="button ghost" onClick={() => setSelectedPhoto(null)}>
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
