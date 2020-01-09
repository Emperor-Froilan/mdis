<?php

class Class_Paging
{
	public $baseUrl;
	public $numberOfPages;
	
	public function __construct(){}
	
	public function addLink($currentPage = ""){
		$i = 1;
		$display = "";
		while ($i <= $this->numberOfPages) {
			$display[] = ($currentPage==$i)?"<a href=\"#\">{$i}</a>":"<a href=\"{$this->baseUrl}&page={$i}\">{$i}</a>";
			$i++;
		}
		
		$display = count($display)>1?"[ " .implode(", ", $display) . " ]":"&nbsp;";
		
		return $display;
	}
}