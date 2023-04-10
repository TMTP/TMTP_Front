import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import Image from "next/image";

const CompareIndexPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchSelectedItems = async () => {
      try {
        const response = await fetch(`/api/compare?id=${id}`);
        const data = await response.json();
        setSelectedItems(data.filter((item) => id.includes(item.login.uuid)));
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchSelectedItems();
    }
  }, [id]);

  return (
    <main>
      <Layout>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 text-center my-4">
            Selected Information
          </h1>
          <table className="w-full table-auto my-2">
            <thead>
              <tr className="bg-blue-200 sm:text-xs text-center">
                <th className="px-2 py-2">Picture</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Company Name</th>
                <th className="px-4 py-2">Formulation</th>
                <th className="sm:hidden px-4 py-2">Separate</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item) => (
                <tr key={item.login.uuid} className="text-center">
                  <td className="px-2 py-2">
                    <Image
                      src={item.picture.large}
                      alt={`${item.name.first} ${item.name.last}`}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    {item.name.first} {item.name.last}
                  </td>
                  <td className="px-4 py-2">{item.location.country}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="sm:hidden px-4 py-2">
                    <button className="text-blue-500">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </main>
  );
};

export default CompareIndexPage;
