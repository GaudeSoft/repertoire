import { query } from "@/lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const contact = await query({
      query: "SELECT * FROM contact",
      values: [],
    });
    res.status(200).json({ contact: contact });
  }

  if (req.method === "POST") {
    const nomContact = req.body.contact_nom;
    const telContact = req.body.contact_telephone;
    const addContact = await query({
      query: "INSERT INTO contact (nom, telephone) VALUES (?, ?)",
      values: [nomContact,telContact],
    });
    let contact = [];
    if (addContact.insertId) {
      message = "success";
    } else {
      message = "error";
    }
    contact = {
      contact_id: addContact.insertId,
      contact_nom: nomContact,
      contact_telephone: telContact,
    
    };
    res.status(200).json({ response: { message: message, contact: contact } });
  }

  if (req.method === "PUT") {
    const contactId = req.body.id;
    const nomContact = req.body.contact_nom;
    const telContact = req.body.contact_tel;

    const updateContact = await query({
      query: "UPDATE contact SET nom = ?, telephone = ?  WHERE id = ?",
      values: [nomContact,telContact, contactId],
    });
    const result = updateContact.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const contact = {
      id: contactId,
      nom: nomContact,
      telephone: telContact,
    };
    res.status(200).json({ response: { message: message, contact: contact } });
  }

  if (req.method === "DELETE") {
    const contactId = req.body.id;
    const deleteContact = await query({
      query: "DELETE FROM contact WHERE id = ?",
      values: [contactId],
    });
    const result = deleteContact.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    res
      .status(200)
      .json({ response: { message: message, id: contactId } });
  }
}
