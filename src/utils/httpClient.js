class HttpClient {
  static routes = {
    contacts: 'http://localhost:3000/contacts',
  };

  static async setContact(data) {
    const contact = await fetch(this.routes.contacts, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return contact;
  }

  static async getContacts() {
    const contacts = await fetch(this.routes.contacts);
    return contacts;
  }

  static async updateContact(data) {
    const contact = await fetch(`${this.routes.contacts}/${data.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return contact;
  }

  static async deleteContact(data) {
    const contact = await fetch(`${this.routes.contacts}/${data.id}`, {
      method: 'DELETE',
    });
    return contact;
  }
}

export default HttpClient;
