import { useState, useEffect } from 'react';

interface ILocation {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<ILocation>();
  const [error, setError] = useState('');
  const options = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
  };

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, []);

  return { location, error };
};
