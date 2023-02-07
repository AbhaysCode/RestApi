const Product = require('../models/product');
const getAllProducts = async (req,res) =>{
    const productQuery = {}
    const {company,name,featured,sort,select} = req.query;
    if(company){
        productQuery.company = company;
    }
    if(featured){
        productQuery.featured = featured;
    }
    if(name){
        productQuery.name = {$regex:name,$options:"i"};
    }
    let apiData = Product.find(productQuery);
    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    let page = Number(req.query.page) || 1;
    console.log("Page is ",page);
    let limit = Number(req.query.limit) || 3;
    let skip = (page-1)*limit;
    apiData = apiData.skip(skip).limit(limit);
    const productsData = await apiData;
    res.status(200).json(productsData);
}
const getAllProductsTesting = async (req,res) =>{
    const productsData = await Product.find(req.query);
    res.status(200).json(productsData);
}
module.exports = {getAllProducts,getAllProductsTesting}
