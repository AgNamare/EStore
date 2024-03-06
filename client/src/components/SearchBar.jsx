function SearchBar() {
  return (
    <div className="flex items-center gap-4 w-fit bg-secondaryFade p-2 rounded-md">
      <input className="bg-transparent focus:outline-none" type="text" placeholder="What are you looking for"/>      
      <span class="material-icons">search</span>
    </div>
  )
}

export default SearchBar
