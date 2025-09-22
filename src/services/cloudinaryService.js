// Cloudinary Image Upload Service
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'ml_default';
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

/**
 * Upload image to Cloudinary
 * @param {File} file - The image file to upload
 * @param {string} folder - Optional folder name in Cloudinary
 * @returns {Promise<Object>} Upload result with URL and metadata
 */
export const uploadImageToCloudinary = async (file, folder = 'products') => {
  try {
    // Debug logging
    console.log('Cloud Name:', CLOUDINARY_CLOUD_NAME);
    console.log('Upload Preset:', CLOUDINARY_UPLOAD_PRESET);
    
    if (!CLOUDINARY_CLOUD_NAME) {
      throw new Error('VITE_CLOUDINARY_CLOUD_NAME is not set in environment variables');
    }
    
    // Validate file
    validateImageFile(file);

    // Create FormData for upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', folder);
    
    // Remove transformations for now to test basic upload

    // Upload to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const result = await response.json();

    return {
      url: result.secure_url,
      publicId: result.public_id,
      originalName: file.name,
      size: file.size,
      type: file.type,
      width: result.width,
      height: result.height,
      format: result.format,
      uploadedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

/**
 * Delete image from Cloudinary
 * @param {string} publicId - The public ID of the image to delete
 * @returns {Promise<void>}
 */
export const deleteImageFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return;

    // Note: For security, image deletion should be done from your backend
    // This is a client-side approach for development only
    console.log('Image deletion should be handled by backend for security:', publicId);
    
    // For now, we'll just log it. In production, call your backend API
    // that handles Cloudinary deletion with your API secret
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    // Don't throw error for deletion failures to avoid blocking other operations
  }
};

/**
 * Validate image file before upload
 * @param {File} file - The file to validate
 * @throws {Error} If file is invalid
 */
export const validateImageFile = (file) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSize = 10 * 1024 * 1024; // 10MB (Cloudinary free tier allows up to 10MB)

  if (!file) {
    throw new Error('No file selected');
  }

  if (!allowedTypes.includes(file.type)) {
    throw new Error('Invalid file type. Please upload JPEG, PNG, or WebP images only.');
  }

  if (file.size > maxSize) {
    throw new Error('File size too large. Maximum size is 10MB.');
  }

  return true;
};

/**
 * Generate a preview URL for the selected file
 * @param {File} file - The file to preview
 * @returns {Promise<string>} Base64 data URL for preview
 */
export const generateImagePreview = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
};

/**
 * Get optimized image URL with transformations
 * @param {string} publicId - Cloudinary public ID
 * @param {Object} options - Transformation options
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (publicId, options = {}) => {
  const {
    width = 400,
    height = 300,
    crop = 'fill',
    quality = 'auto',
    format = 'auto'
  } = options;

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_${width},h_${height},c_${crop},q_${quality},f_${format}/${publicId}`;
};

// Configuration helper
export const getCloudinaryConfig = () => ({
  cloudName: CLOUDINARY_CLOUD_NAME,
  uploadPreset: CLOUDINARY_UPLOAD_PRESET,
  apiUrl: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
});
