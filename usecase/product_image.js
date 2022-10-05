/* eslint-disable no-return-await */
class ProductImageUC {
  constructor(ProductImageRepository, ProductRespository) {
    this.productImageRepository = ProductImageRepository;
    this.productRespository = ProductRespository;
  }
  async getImageProductByProductID(productID) {
    let isSuccess = false
    let product = await this.productRespository.getProductByID(productID)
    if (product == null) {
      return { message: "product not found" }
    }
    let image = await this.productImageRepository.getAllImageByProductID(productID)
    if(image === null){
      return {message : 'image product not found'}
    }
    isSuccess = true
    return {
      isSuccess: isSuccess,
      image: image
    }
  }

  async createImageProduct(imageData) {
    let isSuccess = false;
    let image = null;
    let product = await this.productRespository.getProductByID(
      imageData.product_id
    );
    if (product == null) {
      return {
        message: "failed add image, product not found",
      };
    }
    image = await this.productImageRepository.createImage(imageData);
    if(image == null){
      return {
        message: "something went error",
      };
    }
    isSuccess = true;
    return {
      isSuccess: isSuccess,
      image: image,
    };
  }
  async updateImageProduct(imageData, id) {
    let isSuccess = false;
    let image = null;
    image = await this.productImageRepository.getImageByID(id);
    if (image == null) {
      return {
        message: "image not found",
      };
    }
    image = await this.productImageRepository.updateImage(imageData, id);
    isSuccess = true;
    return {
      isSuccess: isSuccess,
      image: image,
    };
  }
  async deleteImageProduct(id) {
    let isSuccess = false;
    let image = null;
    image = await this.productImageRepository.getImageByID(id);
    if (image == null) {
      return {
        message: "image not found",
      };
    }
    image = await this.productImageRepository.deleteImage(id);
    isSuccess = true;
    return {
      isSuccess: isSuccess,
      image: image,
    };

  }
}

module.exports = ProductImageUC;
