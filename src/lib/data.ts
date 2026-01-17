import type { Appointment, Service, Barber, Barbershop } from './types';

// Mock data - Em produção, substituir por chamadas ao banco de dados

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Corte de Cabelo',
    description: 'Corte masculino tradicional ou moderno',
    duration: 30,
    price: 35.00,
    category: 'hair'
  },
  {
    id: '2',
    name: 'Barba',
    description: 'Aparar e modelar barba',
    duration: 20,
    price: 25.00,
    category: 'beard'
  },
  {
    id: '3',
    name: 'Corte + Barba',
    description: 'Pacote completo de corte e barba',
    duration: 45,
    price: 50.00,
    category: 'combo'
  },
  {
    id: '4',
    name: 'Sobrancelha',
    description: 'Design de sobrancelha masculina',
    duration: 15,
    price: 15.00,
    category: 'other'
  },
  {
    id: '5',
    name: 'Platinado',
    description: 'Descoloração completa',
    duration: 90,
    price: 120.00,
    category: 'hair'
  }
];

export const mockBarbers: Barber[] = [
  {
    id: '1',
    name: 'João Silva',
    photo: '👨‍🦱',
    specialties: ['Corte Tradicional', 'Barba'],
    rating: 4.8,
    availableHours: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
  },
  {
    id: '2',
    name: 'Pedro Santos',
    photo: '👨‍🦲',
    specialties: ['Corte Moderno', 'Platinado'],
    rating: 4.9,
    availableHours: ['10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
  },
  {
    id: '3',
    name: 'Carlos Oliveira',
    photo: '👨',
    specialties: ['Barba', 'Sobrancelha'],
    rating: 4.7,
    availableHours: ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00']
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    clientId: 'user_1',
    clientName: 'Cliente Exemplo',
    barbershopId: 'barbershop_1',
    barberId: '1',
    barberName: 'João Silva',
    serviceId: '1',
    serviceName: 'Corte de Cabelo',
    date: '2026-01-20',
    time: '14:00',
    status: 'confirmed',
    price: 35.00,
    createdAt: new Date('2026-01-15')
  },
  {
    id: '2',
    clientId: 'user_1',
    clientName: 'Cliente Exemplo',
    barbershopId: 'barbershop_1',
    barberId: '2',
    barberName: 'Pedro Santos',
    serviceId: '2',
    serviceName: 'Barba',
    date: '2026-01-25',
    time: '16:30',
    status: 'pending',
    price: 25.00,
    createdAt: new Date('2026-01-16')
  },
  {
    id: '3',
    clientId: 'user_1',
    clientName: 'Cliente Exemplo',
    barbershopId: 'barbershop_1',
    barberId: '1',
    barberName: 'João Silva',
    serviceId: '3',
    serviceName: 'Corte + Barba',
    date: '2026-01-30',
    time: '10:00',
    status: 'confirmed',
    price: 50.00,
    createdAt: new Date('2026-01-17')
  }
];

export const mockBarbershop: Barbershop = {
  id: 'barbershop_1',
  name: 'Barbearia Premium',
  address: 'Rua das Flores, 123 - Centro',
  phone: '(11) 98765-4321',
  email: 'contato@barbeariapremium.com',
  openingHours: {
    'Segunda': { open: '09:00', close: '18:00' },
    'Terça': { open: '09:00', close: '18:00' },
    'Quarta': { open: '09:00', close: '18:00' },
    'Quinta': { open: '09:00', close: '18:00' },
    'Sexta': { open: '09:00', close: '20:00' },
    'Sábado': { open: '09:00', close: '17:00' },
    'Domingo': { open: 'Fechado', close: 'Fechado' }
  },
  services: mockServices,
  barbers: mockBarbers
};

// Função para obter agendamentos por cliente
export function getAppointmentsByClient(clientId: string): Appointment[] {
  return mockAppointments.filter(apt => apt.clientId === clientId);
}

// Função para obter agendamentos por barbeiro
export function getAppointmentsByBarber(barberId: string): Appointment[] {
  return mockAppointments.filter(apt => apt.barberId === barberId);
}

// Função para obter agendamentos por barbearia
export function getAppointmentsByBarbershop(barbershopId: string): Appointment[] {
  return mockAppointments.filter(apt => apt.barbershopId === barbershopId);
}

// Função para obter estatísticas da barbearia
export function getBarbershopStats(barbershopId: string) {
  const appointments = getAppointmentsByBarbershop(barbershopId);
  const today = new Date().toISOString().split('T')[0];
  
  return {
    totalAppointments: appointments.length,
    todayAppointments: appointments.filter(apt => apt.date === today).length,
    pendingAppointments: appointments.filter(apt => apt.status === 'pending').length,
    confirmedAppointments: appointments.filter(apt => apt.status === 'confirmed').length,
    totalRevenue: appointments
      .filter(apt => apt.status === 'completed')
      .reduce((sum, apt) => sum + apt.price, 0),
    monthlyRevenue: appointments
      .filter(apt => {
        const aptDate = new Date(apt.date);
        const now = new Date();
        return aptDate.getMonth() === now.getMonth() && 
               aptDate.getFullYear() === now.getFullYear() &&
               apt.status === 'completed';
      })
      .reduce((sum, apt) => sum + apt.price, 0)
  };
}

// Função para criar novo agendamento (mock)
export function createAppointment(appointment: Appointment) {
  mockAppointments.push(appointment);
}
