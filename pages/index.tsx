import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Form, Field } from "react-final-form";
import QRCode from "qrcode.react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>QR Code renderer</title>
      </Head>
      <Form<{ text?: string }>
        onSubmit={() => {}}
        render={({ values }) => (
          <form className="py-2 px-5">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Text to render
            </label>
            <div className="mt-1">
              <Field
                component="textarea"
                rows={4}
                name="text"
                id="text"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={""}
              />
            </div>
            <QRCode
              className="mt-2 mx-auto"
              level="H"
              value={values.text || ""}
            />
          </form>
        )}
      />
    </>
  );
};

export default Home;
