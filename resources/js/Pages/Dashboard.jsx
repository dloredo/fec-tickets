import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    Bienvenido, {user.name}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        {/* Tarjeta de saldo */}
                        <div className="flex flex-col items-center mb-8">
                            <h3 className="text-lg font-medium text-gray-500">
                                Saldo disponible
                            </h3>
                            <p className="text-4xl font-bold text-green-600 mt-2">
                                ${user.saldo}
                            </p>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col items-center justify-center md:flex-row gap-4">
                            <button
                                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                onClick={() =>
                                    alert("Función para comprar boletos")
                                }
                            >
                                Comprar boletos
                            </button>
                            <button
                                className="w-full md:w-auto px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                onClick={() =>
                                    alert("Función para recargar saldo")
                                }
                            >
                                Recargar saldo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
