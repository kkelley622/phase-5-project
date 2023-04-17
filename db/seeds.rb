# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

donna = User.create(first_name: "Donna", last_name: "Kelley", dob: Date.parse('1960-11-17'), user_name: "dkelley1", password: "bailey56" );
kevin = User.create(first_name: "Kevin", last_name: "Kelley", dob: Date.parse('1992-04-14'), user_name: "kkelley1", password: "1234" );

smith = Provider.create(first_name: "Mark", last_name: "Smith", specialty: "Primary Care");
maddox = Provider.create(first_name: "Stephanie", last_name: "Maddox", specialty: "Dentist");

appointment1 = Appointment.create(date: DateTime.strptime("09/14/2023 8:00", "%m/%d/%Y %H:%M"), user: donna, provider: smith);
appointment2 = Appointment.create(date: DateTime.strptime("07/13/2023 10:00", "%m/%d/%Y %H:%M"), user: donna, provider: maddox);

losartan = Medication.create(generic_name: "losartan" , brand_name: "cozaar");
claritin = Medication.create(generic_name: "loratidine" , brand_name: "claritin");

asthma = Problem.create(description: "asthma", user: kevin);
hypertension = Problem.create(description: "hypertension", user: donna);

lazy_eye = Procedure.create(description: "lazy eye repair", date: Date.parse('1995-03-27'), user: kevin);
colonoscopy = Procedure.create(description: "colonoscopy", date: Date.parse('2023-01-10'), user: donna);

donna_prescription_1 = Prescription.create(medication: losartan, dose: "50mg" , frequency: "Daily", start_date: Date.parse('2016-09-01'), user: donna);
kevin_prescription_1 = Prescription.create(medication: claritin , dose: "10mg" , frequency: "Daily", start_date: Date.parse('2010-08-23'), user: kevin);

