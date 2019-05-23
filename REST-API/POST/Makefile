FUNCTION_NAME = GWearCloud-POST

$(FUNCTION_NAME).zip:
	npm install
	zip -r $@ .

clean:
	rm -rf node_modules
	rm $(FUNCTION_NAME).zip

.PHONY: clean
