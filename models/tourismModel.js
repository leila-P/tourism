import mongoose from 'mongoose';

const tourismSchema = mongoose.Schema({
    id: String,
    country_name: String,
    status: Boolean,
    document_path: String,
    flag_path: String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String,
    from_country: String,
    visa_category: String,
    left_template: String,
    right_template_one: String,
    right_template_two: String,
    
})

var TourismModel = mongoose.model('TourismModel', tourismSchema);

export default TourismModel;