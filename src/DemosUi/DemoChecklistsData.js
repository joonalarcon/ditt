export const DemoChecklistsData = {
  Vehicular: [
    {
      type: "ChecklistInputIDScanner",
      title: "Cédula Conductor",
      subtitle: "Escanee el carnet",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Foto Frontal",
      subtitle: "Vista completa del frente",
      icon: "Camera",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Foto Trasera",
      subtitle: "Vista completa trasera",
      icon: "Camera",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Lateral Izquierdo",
      subtitle: "Vista lateral conductor",
      icon: "Camera",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Lateral Derecho",
      subtitle: "Vista lateral copiloto",
      icon: "Camera",
    },
    {
      type: "ChecklistInputRange",
      title: "Nivel de Combustible",
      subtitle: "Estimación % estanque",
      icon: "Sliders",
    },
    {
      type: "ChecklistInputBoolean",
      title: "Rueda de Repuesto",
      subtitle: "¿Se encuentra presente?",
      icon: "CheckCircle2",
    },
    {
      type: "ChecklistInputBoolean",
      title: "Radio / Panel",
      subtitle: "¿Estado operativo?",
      icon: "Radio",
    },
    {
      type: "ChecklistInputText",
      title: "Kilometraje",
      subtitle: "Kms actuales",
      icon: "Gauge",
    },
    {
      type: "ChecklistInputSignature",
      title: "Firma Conductor",
      subtitle: "Recepción conforme",
      icon: "Feather",
    },
  ],

  Seguridad: [
    {
      type: "ChecklistInputSelect",
      title: "Punto de Control",
      subtitle: "Ubicación del guardia",
      options: [
        "Portería Principal",
        "Acceso Proveedores",
        "Estacionamiento Visitas",
      ],
    },
    {
      type: "ChecklistInputIDScanner",
      title: "Control de Acceso",
      subtitle: "Documento de la visita",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Registro Facial",
      subtitle: "Foto de seguridad",
      icon: "Camera",
    },
    {
      type: "ChecklistInputText",
      title: "Patente Vehículo",
      subtitle: "Si ingresa en auto",
      icon: "Car",
    },
    {
      type: "ChecklistInputMultiSelect",
      title: "Motivo Visita",
      subtitle: "Seleccione motivo",
      options: ["Reunión", "Entrega", "Reparación", "Entrevista"],
    },
    {
      type: "ChecklistInputStatus",
      title: "Estado Acceso",
      subtitle: "Autorización",
      value: "autorizado",
    },
  ],
  Construcción: [
    {
      type: "ChecklistInputSelect",
      title: "Sector de Trabajo",
      subtitle: "Zona de la obra",
      options: [
        "Torre A - Piso 1",
        "Torre A - Piso 2",
        "Excavaciones",
        "Bodega Materiales",
      ],
    },

    {
      type: "ChecklistInputMultiSelect",
      title: "Permisos Requeridos",
      subtitle: "Verifique permisos vigentes",
      options: [
        "Trabajo en Altura",
        "Caliente (Soldadura)",
        "Espacio Confinado",
      ],
    },
    {
      type: "ChecklistInputBoolean",
      title: "Líneas de Vida",
      subtitle: "¿Instaladas y certificadas?",
      icon: "CheckCircle2",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Evidencia Seguridad",
      subtitle: "Foto del entorno seguro",
      icon: "Camera",
    },
    {
      type: "ChecklistInputSignature",
      title: "Prevencionista",
      subtitle: "Autorización de faena",
      icon: "Feather",
    },
  ],
  Mantenimiento: [
    {
      type: "ChecklistInputDate",
      title: "Hora Inicio",
      subtitle: "Registro de llegada",
      icon: "Clock",
    },
    {
      type: "ChecklistInputText",
      title: "ID Equipo / Tag",
      subtitle: "Código de la máquina",
      icon: "Tag",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Daño Encontrado",
      subtitle: "Foto inicial",
      icon: "Camera",
    },
    {
      type: "ChecklistInputStopwatch",
      title: "Tiempo Reparación",
      subtitle: "Cronómetro activo",
      icon: "Timer",
    },
    {
      type: "ChecklistInputMultiSelect",
      title: "Repuestos Usados",
      subtitle: "Insumos gastados",
      options: [
        "Filtro Aire",
        "Aceite 10W40",
        "Correa Distribución",
        "Fusibles",
      ],
    },
    {
      type: "ChecklistInputRating",
      title: "Calidad Final",
      subtitle: "Evaluación del técnico",
      icon: "Star",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Trabajo Terminado",
      subtitle: "Evidencia final",
      icon: "Camera",
    },
  ],
  "Checklist EPP": [
    {
      type: "ChecklistInputIDScanner",
      title: "Identificación",
      subtitle: "Trabajador que recibe",
    },
    {
      type: "ChecklistInputMultiSelect",
      title: "Elementos Entregados",
      subtitle: "Seleccione items",
      options: [
        "Casco de Seguridad",
        "Lentes Protectores",
        "Guantes Cabretilla",
        "Zapatos Dieoeléctricos",
        "Protector Auditivo",
      ],
    },
    {
      type: "ChecklistInputSelect",
      title: "Motivo Entrega",
      subtitle: "¿Por qué se entrega?",
      options: [
        "Nuevo Ingreso",
        "Reposición por Daño",
        "Reposición por Antigüedad",
        "Pérdida",
      ],
    },
    {
      type: "ChecklistInputInstruction",
      title: "Compromiso",
      content:
        "Declaro recibir los elementos en buen estado y conocer su uso correcto.",
    },
    {
      type: "ChecklistInputSignature",
      title: "Recepción Conforme",
      subtitle: "Firma del trabajador",
      icon: "Feather",
    },
  ],
  "Servicio Técnico": [
    {
      type: "ChecklistInputText",
      title: "Serie / Activo",
      subtitle: "S/N del equipo",
      icon: "Laptop",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Estado Pantalla",
      subtitle: "Evidencia sin quebraduras",
      icon: "Camera",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Estado Teclado",
      subtitle: "Evidencia teclas",
      icon: "Camera",
    },
    {
      type: "ChecklistInputBoolean",
      title: "Enciende",
      subtitle: "¿El equipo prende?",
      icon: "Power",
    },
    {
      type: "ChecklistInputBoolean",
      title: "Contraseña",
      subtitle: "¿Tiene clave de usuario?",
      icon: "Lock",
    },
    {
      type: "ChecklistInputMultiSelect",
      title: "Accesorios",
      subtitle: "Deja en recepción",
      options: ["Cargador", "Mouse", "Bolso", "Adaptador"],
    },
    {
      type: "ChecklistInputText",
      title: "Falla Reportada",
      subtitle: "Descripción del cliente",
      icon: "AlertTriangle",
    },
  ],
  "Limpieza Dependencias": [
    {
      type: "ChecklistInputSelect",
      title: "Zona Auditada",
      subtitle: "Lugar de limpieza",
      options: [
        "Baños Gerencia",
        "Comedor General",
        "Recepción",
        "Oficinas Piso 3",
      ],
    },
    {
      type: "ChecklistInputBoolean",
      title: "Pisos Limpios",
      subtitle: "Sin manchas ni residuos",
      icon: "CheckCircle2",
    },
    {
      type: "ChecklistInputBoolean",
      title: "Papeleros Vacíos",
      subtitle: "Bolsas cambiadas",
      icon: "Trash2",
    },
    {
      type: "ChecklistInputBoolean",
      title: "Insumos Repuestos",
      subtitle: "Jabón, Confort, Toalla",
      icon: "Droplets",
    },
    {
      type: "ChecklistInputRating",
      title: "Calidad Percibida",
      subtitle: "Evaluación supervisión",
      icon: "Star",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Foto Panorámica",
      subtitle: "Evidencia final",
      icon: "Camera",
    },
  ],
  "Carga Camión": [
    {
      type: "ChecklistInputIDScanner",
      title: "Chofer",
      subtitle: "Responsable carga",
    },
    {
      type: "ChecklistInputText",
      title: "Patente Tracto",
      subtitle: "Placa camión",
      icon: "Truck",
    },
    {
      type: "ChecklistInputText",
      title: "Patente Rampa",
      subtitle: "Placa acoplado",
      icon: "Truck",
    },
    {
      type: "ChecklistProductScan",
      title: "Validación Pallets",
      subtitle: "Escanear carga",
    },
    {
      type: "ChecklistInputPhoto",
      title: "Estiba Carga",
      subtitle: "Foto amarres seguros",
      icon: "Camera",
    },
    {
      type: "ChecklistInputBoolean",
      title: "Sellos Puestos",
      subtitle: "¿Precintos de seguridad?",
      icon: "Lock",
    },
    {
      type: "ChecklistInputSignature",
      title: "Despacho Conforme",
      subtitle: "Firma Chofer",
      icon: "Feather",
    },
  ],
};
