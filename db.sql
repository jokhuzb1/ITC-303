CREATE TABLE IF NOT EXISTS roomBooking (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    checkin_date DATE NOT NULL,
    checkout_date DATE NOT NULL
    

);

ALTER TABLE roombooking
ADD roomtype varchar(100) NOT NULL,
ADD mealplan varchar(100),
ADD phone int(100),
ADD email varchar(220);



