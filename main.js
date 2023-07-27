
const postsData = [
    {
      id: 1,
      type: 'photo',
      image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg',
      description: 'Sample photo post',
      tags: ['tag1', 'tag2'],
      likes: 10
    },
    {
      id: 2,
      type: 'video',
      thumbnail: 'path_to_thumbnail1.jpg',
      video: 'https://media.istockphoto.com/id/1413182419/video/aerial-view-of-a-lake-at-sunset-in-overtornea-sweden.mp4?s=mp4-640x640-is&k=20&c=l4Osu8em_4VxOWX9u0dbz2FS4zIi30xgIxy3VPP_4ps=',
      description: 'Sample video post',
      tags: ['tag3', 'tag4'],
      likes: 5
    },
    
  ];
  
  // Function to render posts on the post wall
  function renderPosts() {
    const postWall = document.getElementById('postWall');
    postWall.innerHTML = '';
  
    postsData.forEach(post => {
      const postItem = document.createElement('div');
      postItem.classList.add('post-item');
  
      if (post.type === 'photo') {
        // Photo post
        postItem.innerHTML = `
          <img src="${post.image}" alt="${post.description}">
          <p>${post.description}</p>
          <p>Likes: ${post.likes}</p>
          <!-- Add like button and other UI components here -->
        `;
      } else if (post.type === 'video') {
        // Video post
        postItem.innerHTML = `
          <video poster="${post.thumbnail}" controls>
            <source src="${post.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p>${post.description}</p>
          <p>Likes: ${post.likes}</p>
          <!-- Add like button and other UI components here -->
        `;
      }
  
      postWall.appendChild(postItem);
    });
  }
  
  // Function to handle post click and show modal
  function handlePostClick(postId) {
    const post = postsData.find(post => post.id === postId);
    if (!post) return;
  
    const postModal = document.getElementById('postModal');
    postModal.innerHTML = '';
  
    if (post.type === 'photo') {
      // Photo post modal
      postModal.innerHTML = `
        <div class="post-modal-content">
          <img src="${post.image}" alt="${post.description}">
          <p>${post.description}</p>
          <p>Likes: ${post.likes}</p>
          <!-- Add like button and other UI components here -->
        </div>
      `;
    } else if (post.type === 'video') {
      // Video post modal
      postModal.innerHTML = `
        <div class="post-modal-content">
          <video controls>
            <source src="${post.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p>${post.description}</p>
          <p>Likes: ${post.likes}</p>
          <!-- Add like button and other UI components here -->
        </div>
      `;
    }
  
    // Show the modal
    postModal.style.display = 'block';
  }
  
  // Function to close the post modal
  function closePostModal() {
    const postModal = document.getElementById('postModal');
    postModal.style.display = 'none';
  }
  
  // Add event listener to create post button
  const createPostBtn = document.getElementById('createPostBtn');
  createPostBtn.addEventListener('click', () => {
    // Handle post creation logic here
    // You can show a form to create a post with image/video upload, description, and tags
  });
  
  // Add event listener to post wall to handle post clicks
  const postWall = document.getElementById('postWall');
  postWall.addEventListener('click', event => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('post-item')) {
      const postId = parseInt(clickedElement.dataset.postId);
      handlePostClick(postId);
    }
  });
  
  // Add event listener to close the post modal when clicking outside the modal
  const postModal = document.getElementById('postModal');
  window.addEventListener('click', event => {
    if (event.target === postModal) {
      closePostModal();
    }
  });
  
  // Initial rendering of posts on the post wall
  renderPosts();
  