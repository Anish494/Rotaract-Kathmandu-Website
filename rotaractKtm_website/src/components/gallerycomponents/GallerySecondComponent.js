import React, { useEffect, useState } from "react";
import API from "../../api";
function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    API.get("/gallery/")
      .then((res) => {
        // Sort by ID to get first photos consistently
        const sortedPhotos = res.data.sort((a, b) => a.id - b.id);
        setPhotos(sortedPhotos);
      })
      .catch((err) => {
        console.error("Error fetching gallery:", err);
      });
  }, []);

  // Determine photos to display
  const displayedPhotos = showAll ? photos : photos.slice(0, 9);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedPhotos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={photo.image}
              alt={photo.title || "Gallery Image"}
              className="w-full h-64 object-cover"
            />
            {photo.title && (
              <p className="p-2 text-center font-medium">{photo.title}</p>
            )}
          </div>
        ))}
      </div>

      {/* Show button only if there are more than 9 photos */}
      {photos.length > 9 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {showAll ? "View Less" : "View All Photos"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
