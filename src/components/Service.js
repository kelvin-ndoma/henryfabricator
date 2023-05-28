import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      title: 'Office Partitioning',
      description: 'We offer office partitioning services to create separate areas and optimize space utilization in your office. Our expert team will design and install partitions tailored to your requirements.',
      image: 'https://img.freepik.com/premium-photo/3d-rendering-empty-office-workstation-partition-interior_674881-1977.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=ais'
      
    },
    {
      title: 'Sliding Doors, Sliding Windows, and Project Windows',
      description: 'We provide high-quality sliding doors, sliding windows, and project windows for your office. These products offer easy access, space-saving features, and can be customized to fit your specific needs.',
      image: 'https://img.freepik.com/free-photo/empty-closed-door_1339-6351.jpg?size=626&ext=jpg&ga=GA1.2.1191098058.1684769255&semt=ais'
    },
    {
      title: 'Window Blinds',
      description: 'Enhance the privacy and control the lighting in your office with our window blinds. We offer a wide range of blinds made from different materials to match your office aesthetics.',
      image: 'https://img.freepik.com/premium-photo/windows-with-open-modern-horizontal-blinds-indoors_130265-4458.jpg?size=626&ext=jpg&ga=GA1.2.1191098058.1684769255&semt=ais'
    },
    {
      title: 'All Kinds of Glass',
      description: 'We offer a variety of glass options for your office, including opaque, clear, one-way, and tinted glass. Our glass products are of high quality and can be used for windows, partitions, and more.',
      image: 'https://img.freepik.com/premium-photo/black-double-automatic-glass-door-shop-windows_88088-953.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=ais'
    },
    {
      title: 'Quotation Making',
      description: 'Need a detailed cost estimate for your office project? Our team can assist you with quotation making, providing accurate pricing information based on your requirements.',
      image: 'https://img.freepik.com/free-photo/couple-planning-redecorating-house-using-laptop_23-2148814337.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=ais'
    },
    {
      title: 'Office Planning (Plane Drawing)',
      description: 'Our experts can help you with office planning through precise plane drawings. We consider your space, furniture, and workflow to create an optimized office layout.',
      image: 'https://img.freepik.com/free-vector/office-cubicles-isometric-with-illustration_1284-56280.jpg?size=626&ext=jpg&ga=GA1.2.1191098058.1684769255&semt=ais'
    },
    {
      title: 'Glass Tinting',
      description: 'Control the light, heat, and privacy in your office with our glass tinting services. We apply high-quality tint films to glass surfaces, providing various tinting options to suit your needs.',
      image: 'https://img.freepik.com/free-photo/side-view-worker-spraying-powder-paint-from-gun_23-2149878758.jpg?size=626&ext=jpg&ga=GA1.2.1191098058.1684769255&semt=ais'
    },
    {
      title: 'Office Maintenance',
      description: 'Keep your office in top condition with our maintenance services. We offer comprehensive maintenance solutions to ensure the smooth functioning of your office environment.',
      image: 'https://img.freepik.com/free-vector/home-repairmen-workflow-background-large-smartphone-foreground-flat-illustration_1284-62926.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=ais'
    },
    {
      title: 'All Aluminium Accessories',
      description: 'We provide a range of aluminum accessories for your office, including locks, hinges, and rubber components. These accessories are essential for the proper functioning and security of your office infrastructure.',
      image: 'https://img.freepik.com/free-photo/building-glass-entrance_1127-3190.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=ais'
    }
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to="/contact" className="get-service-btn">
                Get Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
