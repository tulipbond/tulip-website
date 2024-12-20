import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="font-bold text-center mx-auto max-w-7xl items-center mb-5">
      <h1 className="sm:text-2xl md:text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
        Find Us
      </h1>
      <div className="w-full mt-6">
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3618.7699188149904!2d66.98126716356204!3d24.905828571605287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x3eb315c226748237%3A0x4125d93da8f89e59!2sTulip%20bond%2C%20Metroville%20Labor%20Colony%20Sindh%20Industrial%20Trading%20Estate%2C%20Karachi!3m2!1d24.905541799999998!2d66.9831681!4m3!3m2!1d24.9058991!2d66.98292769999999!5e0!3m2!1sen!2s!4v1733301933226!5m2!1sen!2s"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7781893737006!2d66.98059337393681!3d24.905546543454612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315c226748237%3A0x4125d93da8f89e59!2sTulip%20bond!5e0!3m2!1sen!2s!4v1733585803066!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Combined Map Location"
          className="h-[500px] w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
