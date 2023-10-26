import { NextApiRequest, NextApiResponse } from 'next';
import {uploads} from '../utils/cloudinary';
import fs from 'fs'

export const uploadData = async (req: NextApiRequest,res: NextApiResponse) =>{
  const new_data = {
    name: req.body.productName,
    desc: req.body.productDescription,
    minBid: req.body.minimumBid,
    bidEndTime: req.body.BidEndTime,
    prodImage: ""
  }

  if (req.body.files.length>2){
    const uploader  = async(path)=> await uploads(path, "AuctionAce")
    const file = req.body.files[0]
    const {path} = file;

    const response = await uploader(path)
    fs.unlinkSync(path)
    new_data.prodImage = response
  }
}