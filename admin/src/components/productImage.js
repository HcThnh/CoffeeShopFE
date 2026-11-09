export const getProductImageUrl = (product, fallback) => {
    const images = Array.isArray(product?.images) ? product.images : [];
    const primaryImage = images.find(
        (image) => image?.primary && typeof image.imageUrl === "string" && image.imageUrl.trim()
    );
    const firstImage = images.find(
        (image) => typeof image?.imageUrl === "string" && image.imageUrl.trim()
    );

    return primaryImage?.imageUrl.trim() || firstImage?.imageUrl.trim() || fallback;
};
