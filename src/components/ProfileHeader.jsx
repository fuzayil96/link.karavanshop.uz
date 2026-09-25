function ProfileHeader() {
    return(
        <div className="flex flex-col items-center -mt-10 z-10 relative">
      <img 
        src="https://via.placeholder.com/80" 
        alt="DenTex Profile" 
        className="w-20 h-20 rounded-full object-cover border-4 border-slate-200"
      />
      <h1 className="text-xl font-bold mt-2 text-slate-900">DenTex</h1>
      <p className="text-sm text-slate-600 font-medium">Clothing brand from Kazakhstan</p>
    </div>
    )
}

export default ProfileHeader