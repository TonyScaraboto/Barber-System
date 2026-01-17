// Tipos de usuário
export type UserRole = 'client' | 'barbershop';

// Interface de usuário
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

// Interface de barbearia
export interface Barbershop {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    [key: string]: { open: string; close: string };
  };
  services: Service[];
  barbers: Barber[];
}

// Interface de barbeiro
export interface Barber {
  id: string;
  name: string;
  photo?: string;
  specialties: string[];
  rating: number;
  availableHours: string[];
}

// Interface de serviço
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // em minutos
  price: number;
  category: 'hair' | 'beard' | 'combo' | 'other';
}

// Interface de agendamento
export interface Appointment {
  id: string;
  clientId: string;
  clientName: string;
  barbershopId: string;
  barberId: string;
  barberName: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  notes?: string;
  createdAt: Date;
}

// Interface de pontos de fidelidade
export interface LoyaltyPoints {
  userId: string;
  points: number;
  history: {
    date: Date;
    points: number;
    description: string;
  }[];
}

// Função para verificar role do usuário
export function getUserRole(userId: string): UserRole {
  // Em produção, buscar do banco de dados ou metadata do Clerk
  if (typeof globalThis.Clerk !== 'undefined' && globalThis.Clerk?.user) {
    const role = globalThis.Clerk.user?.publicMetadata?.role;
    if (role === 'barbershop' || role === 'client') return role;
  }
  // Fallback mock
  const barbershopUsers = ['barbershop_user_id_example'];
  return barbershopUsers.includes(userId) ? 'barbershop' : 'client';
}

// Função para redirecionar baseado no role
export function getDashboardPath(role: UserRole): string {
  return role === 'barbershop' ? '/dashboard/barbershop' : '/dashboard/client';
}
