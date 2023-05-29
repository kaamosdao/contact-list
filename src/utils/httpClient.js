class HttpClient {
  static routes = {
    contacts: 'http://localhost:3000/contacts',
  };

  static async setContact(data) {
    const response = await fetch(this.routes.contacts, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response?.ok) {
      const error = new Error('Server error');
      error.isServerError = true;
      throw error;
    }
    return response;
  }

  static async getContacts() {
    const response = await fetch(this.routes.contacts);
    if (!response?.ok) {
      const error = new Error('Server error');
      error.isServerError = true;
      throw error;
    }
    return response;
  }

  static async updateContact(data) {
    const response = await fetch(`${this.routes.contacts}/${data.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response?.ok) {
      const error = new Error('Server error');
      error.isServerError = true;
      throw error;
    }
    return response;
  }

  static async deleteContact(data) {
    const response = await fetch(`${this.routes.contacts}/${data.id}`, {
      method: 'DELETE',
    });
    if (!response?.ok) {
      const error = new Error('Server error');
      error.isServerError = true;
      throw error;
    }
    return response;
  }
}

export default HttpClient;
