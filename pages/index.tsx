import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useRef } from "react";
import { Form, Field } from "react-final-form";
import QRCode from "qrcode.react";

const Home: NextPage = () => {
  const onDownload = useCallback(() => {
    var link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = (
      document.getElementById("code") as HTMLCanvasElement
    ).toDataURL();
    link.click();
  }, []);
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
                defaultValue=""
              />
            </div>
            <QRCode
              id="code"
              className="mt-2 mx-auto"
              size={256}
              level="H"
              renderAs="canvas"
              value={values.text || ""}
            />
            <button
              onClick={onDownload}
              type="button"
              className="mx-auto my-5 flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download
            </button>
          </form>
        )}
      />
    </>
  );
};

export default Home;
