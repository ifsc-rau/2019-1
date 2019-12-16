package database;

import java.util.List;

public interface DAO<T> {

	Object get(T t);
	List<T> getAll();
	boolean save(T t);
	boolean update(T t);
	boolean delete(T t);
}
