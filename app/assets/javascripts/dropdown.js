
// dropdown toggle 'hidden' class on song-add-dropdown ul
const toggleDropdown = () => {
	$('#add-dropdown').toggleClass('hidden-dropdown');
};

// Add click listener to add icon which invokes toggle function
$(() => $('#add-dropdown-btn').on('click', toggleDropdown));
