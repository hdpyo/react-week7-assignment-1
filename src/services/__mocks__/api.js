export async function fetchRegions() {
  return [];
}

export async function fetchCategories() {
  return [];
}

export async function fetchRestaurants() {
  return [];
}

export async function fetchRestaurant() {
  return {};
}

export function postLogin({ email, password }){
  return {
    email,
    password,
  };
}

export function postReview({ accessToken, restaurantId, score, description }){
  return {
    accessToken,
    restaurantId,
    score,
    description,
  };
}
