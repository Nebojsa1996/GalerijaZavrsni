import React from "react";


export default function CreateGalleryForm({

    onCreateNewGallery,
    newGallery,
    setNewGallery

}) {
    return (
      <form onSubmit={onCreateNewGallery}>
        <div class="form-group">
          <label>Title:</label>
          <input
            class="form-control"
            required
            type="text"
            value={newGallery.title}
            onChange={({ target }) => setNewGallery({ ...newGallery, title: target.value })}
          />
        </div>
            <button className="button" type="submit"><strong>ADD NEW GALLERY</strong></button>


        </form>

    )
}

