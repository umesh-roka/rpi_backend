import { Counter,Notice } from "../models/Notice.js";



const getNextSequenceValue = async (sequenceName) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

  const counter = await Counter.findOne({ _id: sequenceName });

  if (!counter) {
    // If no counter exists, initialize it with the current date and sequence value
    const newCounter = await Counter.create({
      _id: sequenceName,
      sequence_value: 1,
      lastUpdated: currentDate,
    });
    return newCounter.sequence_value;
  }

  // Check if the counter needs to be reset based on the date
  if (counter.lastUpdated !== currentDate) {
    // Reset the sequence value and update the date
    counter.sequence_value = 1;
    counter.lastUpdated = currentDate;
    await counter.save();
  } else {
    // Increment the sequence value if the date matches
    counter.sequence_value += 1;
    await counter.save();
  }

  return counter.sequence_value;
};

// API to add a new notice
export const noticeAdd = async (req, res) => {
  const { notice_title, notice_uploadedBy, notice_detail } = req.body;

  try {
    // Fetch the next serial number for notices
    const noticeSN = await getNextSequenceValue('notice_sn');

    // Create the notice with the new serial number
    await Notice.create({
      notice_sn: noticeSN,
      notice_title,
      notice_uploadedBy,
      notice_detail,
      notice_file: req.filepath, // Assuming req.filepath is set correctly for file uploads
    });

    return res.status(200).json({
      status: 'success',
      message: 'Successfully added',
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`,
    });
  }
};

export const getAllNotice = async (req,res)=>{
 
  try {
    const order = await Notice.find();
    return res.status(200).json({
      status:'success',
      data:order
    })
    
  } catch (err) {
    return res.status(400).json({
      status:'error',
      message:`${err}`
    })
    
  }
}