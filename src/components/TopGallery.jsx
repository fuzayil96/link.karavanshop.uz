function TopGallery() {
    return(
        <div className="w-full flex h-48 bg-white overflow-hidden">
      <div className="w-1/3 border-r">
        <img src="https://via.placeholder.com/150" alt="Jacket" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/3 flex items-center justify-center flex-col p-4 text-center border-r">
        <p className="text-xs text-gray-500 mb-2">See All →</p>
        <h2 className="text-xl font-serif tracking-widest">SNOW JACKET</h2>
      </div>
      <div className="w-1/3">
        <img src="https://via.placeholder.com/150" alt="Jacket" className="w-full h-full object-cover" />
      </div>
    </div>
    )
    
}

export default TopGallery