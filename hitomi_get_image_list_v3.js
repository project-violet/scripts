// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 4036:
case 2654:
case 1467:
case 440:
case 3921:
case 2204:
case 1193:
case 2510:
case 1950:
case 1611:
case 429:
case 2494:
case 1005:
case 3524:
case 315:
case 2359:
case 2030:
case 1381:
case 3881:
case 4010:
case 1765:
case 1533:
case 2027:
case 3250:
case 2018:
case 1043:
case 2069:
case 1641:
case 4038:
case 2540:
case 1221:
case 2536:
case 133:
case 2046:
case 467:
case 2791:
case 385:
case 29:
case 1887:
case 3387:
case 3246:
case 3647:
case 2556:
case 1893:
case 1916:
case 359:
case 3272:
case 242:
case 3230:
case 2905:
case 937:
case 3626:
case 3269:
case 2050:
case 3218:
case 2982:
case 2913:
case 1948:
case 1918:
case 1969:
case 2943:
case 2558:
case 3452:
case 313:
case 3461:
case 3248:
case 1972:
case 1927:
case 2360:
case 3788:
case 1946:
case 2898:
case 106:
case 3216:
case 4007:
case 2634:
case 4056:
case 979:
case 3181:
case 1525:
case 3692:
case 1691:
case 223:
case 3420:
case 1182:
case 3574:
case 421:
case 1093:
case 305:
case 2414:
case 1087:
case 1105:
case 566:
case 3971:
case 2096:
case 1451:
case 2665:
case 3959:
case 3563:
case 3735:
case 1259:
case 718:
case 1609:
case 1271:
case 643:
case 2146:
case 478:
case 2444:
case 1304:
case 3804:
case 2130:
case 2077:
case 2098:
case 2169:
case 2022:
case 2118:
case 1754:
case 336:
case 18:
case 3277:
case 247:
case 74:
case 669:
case 3222:
case 1805:
case 3305:
case 645:
case 974:
case 3755:
case 3382:
case 558:
case 928:
case 3313:
case 3408:
case 1239:
case 1431:
case 3343:
case 116:
case 2818:
case 2869:
case 1843:
case 3296:
case 3939:
case 971:
case 4002:
case 2827:
case 303:
case 1998:
case 1922:
case 148:
case 225:
case 3723:
case 3457:
case 1294:
case 3509:
case 3710:
case 318:
case 1980:
case 1106:
case 3738:
case 1052:
case 2724:
case 736:
case 2344:
case 2095:
case 2229:
case 1799:
case 511:
case 2103:
case 346:
case 3736:
case 1108:
case 1820:
case 1837:
case 705:
case 876:
case 3591:
case 2314:
case 2421:
case 1674:
case 2145:
case 3879:
case 3280:
case 1379:
case 2668:
case 3994:
case 1351:
case 3851:
case 2970:
case 2080:
case 3443:
case 2803:
case 3831:
case 581:
case 4073:
case 279:
case 2961:
case 3675:
case 4088:
case 1806:
case 754:
case 2586:
case 138:
case 1857:
case 3357:
case 34:
case 161:
case 751:
case 2573:
case 392:
case 1070:
case 3758:
case 1542:
case 1137:
case 584:
case 99:
case 1120:
case 1808:
case 3413:
case 3308:
case 1481:
case 1719:
case 7:
case 1768:
case 2880:
case 2601:
case 2774:
case 308:
case 3944:
case 3790:
case 1161:
case 2920:
case 430:
case 2937:
case 475:
case 3914:
case 1244:
case 3829:
case 715:
case 504:
case 1624:
case 1008:
case 2471:
case 3511:
case 3332:
case 2459:
case 923:
case 3370:
case 1289:
case 1903:
case 3785:
case 3352:
case 1861:
case 1852:
case 2439:
case 3361:
case 3245:
case 713:
case 960:
case 648:
case 3702:
case 1528:
case 3625:
case 616:
case 2180:
case 589:
case 4023:
case 2895:
case 145:
case 857:
case 228:
case 1170:
case 274:
case 3493:
case 785:
case 232:
case 1945:
case 3215:
case 3079:
case 3203:
case 2231:
case 169:
case 4055:
case 3167:
case 1526:
case 2908:
case 987:
case 2783:
case 64:
case 2797:
case 1218:
case 1269:
case 3948:
case 185:
case 2021:
case 335:
case 2623:
case 692:
case 1387:
case 867:
case 3916:
case 745:
case 2398:
case 840:
case 3946:
case 2495:
case 1181:
case 950:
case 3918:
case 2213:
case 2655:
case 1452:
case 829:
case 2839:
case 3930:
case 2860:
case 1788:
case 565:
case 3927:
case 3950:
case 3611:
case 3193:
case 2871:
case 3013:
case 563:
case 1524:
case 2635:
case 115:
case 2859:
case 1432:
case 226:
case 1921:
case 2599:
case 917:
case 3429:
case 3221:
case 2139:
case 183:
case 333:
case 3533:
case 646:
case 2480:
case 3641:
case 1305:
case 1642:
case 2121:
case 3260:
case 2059:
case 544:
case 2673:
case 2071:
case 2348:
case 3239:
case 2792:
case 38:
case 761:
case 1277:
case 1298:
case 982:
case 103:
case 2747:
case 738:
case 3922:
case 1723:
case 2287:
case 1457:
case 154:
case 3575:
case 3843:
case 316:
case 1343:
case 1678:
case 1296:
case 2330:
case 1612:
case 2327:
case 2350:
case 3479:
case 4049:
case 1971:
case 3462:
case 2700:
case 907:
case 31:
case 2519:
case 2568:
case 3113:
case 494:
case 3093:
case 1437:
case 4066:
case 4084:
case 105:
case 2821:
case 3143:
case 1735:
case 2549:
case 4068:
case 4019:
case 2039:
case 3271:
case 613:
case 1306:
case 2446:
case 1707:
case 476:
case 2189:
case 338:
case 3995:
case 3857:
case 2469:
case 2303:
case 1443:
case 3512:
case 531:
case 55:
case 92:
case 322:
case 1675:
case 2144:
case 2472:
case 3578:
case 3597:
case 2602:
case 1758:
case 3137:
case 3542:
case 2261:
case 1308:
case 2448:
case 2685:
case 3808:
case 3120:
case 1482:
case 14:
case 572:
case 3576:
case 1295:
case 1029:
case 659:
case 1151:
case 1067:
case 361:
case 2725:
case 287:
case 78:
case 786:
case 146:
case 1131:
case 118:
case 2889:
case 452:
case 1280:
case 71:
case 1851:
case 556:
case 1862:
case 926:
case 202:
case 3820:
case 3108:
case 1320:
case 1337:
case 3837:
case 47:
case 2814:
case 1591:
case 2929:
case 3528:
case 3592:
case 706:
case 2044:
case 3517:
case 1785:
case 2931:
case 603:
case 3852:
case 2658:
case 1245:
case 0:
case 654:
case 2089:
case 3915:
case 3945:
case 1129:
case 1062:
case 63:
case 651:
case 2775:
case 1215:
case 1079:
case 2257:
case 770:
case 2656:
case 2206:
case 1493:
case 3214:
case 733:
case 1790:
case 1944:
case 3057:
case 4054:
case 2636:
case 2640:
case 1541:
case 1031:
case 636:
case 3719:
case 3500:
case 3008:
case 2962:
case 1511:
case 3870:
case 1332:
case 1867:
case 70:
case 2554:
case 3244:
case 3329:
case 856:
case 1160:
case 481:
case 396:
case 283:
case 1139:
case 3027:
case 2600:
case 1501:
case 3072:
case 2881:
case 946:
case 4024:
case 2250:
case 3709:
case 3048:
case 2470:
case 1859:
case 2432:
case 3494:
case 126:
case 1599:
case 2216:
case 1322:
case 3822:
case 1776:
case 1377:
case 1398:
case 3877:
case 834:
case 2181:
case 868:
case 2628:
case 2461:
case 2773:
case 1282:
case 3558:
case 2788:
case 3360:
case 2227:
case 2230:
case 1712:
case 3905:
case 1783:
case 2272:
case 3896:
case 414:
case 3982:
case 94:
case 732:
case 687:
case 1778:
case 1797:
case 1623:
case 3507:
case 1159:
case 39:
case 85:
case 992:
case 2393:
case 1171:
case 2246:
case 3130:
case 2804:
case 3444:
case 3172:
case 1584:
case 3127:
case 236:
case 3022:
case 3118:
case 3077:
case 3098:
case 1060:
case 2735:
case 2563:
case 3711:
case 908:
case 3146:
case 573:
case 3096:
case 4063:
case 2971:
case 3116:
case 1350:
case 3741:
case 3850:
case 2959:
case 1568:
case 1700:
case 612:
case 3665:
case 2574:
case 2420:
case 323:
case 3321:
case 877:
case 3846:
case 2406:
case 2457:
case 1664:
case 1287:
case 254:
case 1686:
case 2723:
case 2939:
case 1318:
case 1403:
case 3827:
case 1415:
case 698:
case 779:
case 2081:
case 1372:
case 2104:
case 1059:
case 1445:
case 997:
case 575:
case 2642:
case 2313:
case 1348:
case 2382:
case 3848:
case 251:
case 1316:
case 3816:
case 2298:
case 2676:
case 4009:
case 2280:
case 1733:
case 1565:
case 3932:
case 2851:
case 915:
case 490:
case 2320:
case 3145:
case 1929:
case 1814:
case 3344:
case 3095:
case 3115:
case 2131:
case 4091:
case 218:
case 2710:
case 2509:
case 2738:
case 2758:
case 1114:
case 292:
case 2405:
case 3845:
case 1685:
case 2413:
case 2308:
case 1448:
case 2482:
case 1252:
case 3588:
case 540:
case 865:
case 2151:
case 24:
case 1416:
case 529:
case 2067:
case 820:
case 3586:
case 2306:
case 1446:
case 2357:
case 150:
case 760:
case 288:
case 1189:
case 3952:
case 2831:
case 3803:
case 567:
case 1418:
case 1469:
case 62:
case 1315:
case 2675:
case 1430:
case 1144:
case 3535:
case 3471:
case 905:
case 1979:
case 2370:
case 2332:
case 2511:
case 1894:
case 107:
case 3699:
case 2867:
case 3920:
case 2829:
case 2914:
case 2790:
case 2944:
case 796:
case 3774:
case 1237:
case 3015:
case 3195:
case 3262:
case 936:
case 4011:
case 2633:
case 1380:
case 2031:
case 1775:
case 2653:
case 695:
case 332:
case 2062:
case 521:
case 93:
case 742:
case 3231:
case 2487:
case 1257:
case 841:
case 297:
case 79:
case 466:
case 371:
case 1534:
case 3906:
case 844:
case 562:
case 1044:
case 1395:
case 3895:
case 198:
case 1208:
case 2361:
case 2352:
case 954:
case 1931:
case 3555:
case 1089:
case 3460:
case 2245:
case 578:
case 3839:
case 938:
case 3655:
case 2969:
case 2918:
case 3742:
case 2927:
case 3860:
case 2930:
case 964:
case 3776:
case 1822:
case 552:
case 2946:
case 1877:
case 884:
case 3377:
case 2525:
case 456:
case 235:
case 881:
case 2893:
case 270:
case 3171:
case 3783:
case 1905:
case 3712:
case 2553:
case 2948:
case 1913:
case 637:
case 3797:
case 1027:
case 1030:
case 2381:
case 814:
case 576:
case 1540:
case 1198:
case 1018:
case 3904:
case 1536:
case 45:
case 1791:
case 196:
case 1046:
case 1016:
case 1196:
case 1654:
case 434:
case 1204:
case 3599:
case 1048:
case 2082:
case 2950:
case 500:
case 2611:
case 811:
case 472:
case 1869:
case 2575:
case 216:
case 671:
case 1818:
case 3415:
case 3327:
case 1827:
case 557:
case 3726:
case 1872:
case 3293:
case 2922:
case 750:
case 2998:
case 2977:
case 3664:
case 125:
case 2734:
case 3728:
case 969:
case 1987:
case 632:
case 787:
case 395:
case 855:
case 1993:
case 147:
case 3316:
case 1150:
case 3717:
case 628:
case 2260:
case 3059:
case 4075:
case 3688:
case 2996:
case 2813:
case 3348:
case 1502:
case 580:
case 943:
case 2259:
case 1489:
case 3549:
case 2271:
case 1711:
case 2609:
case 853:
case 2304:
case 1130:
case 1127:
case 3584:
case 3566:
case 286:
case 1022:
case 2143:
case 393:
case 1077:
case 804:
case 510:
case 2093:
case 2182:
case 1590:
case 2113:
case 2087:
case 2105:
case 1321:
case 1414:
case 702:
case 1096:
case 1850:
case 3350:
case 1116:
case 3519:
case 3568:
case 717:
case 1281:
case 3700:
case 642:
case 2576:
case 795:
case 387:
case 261:
case 2070:
case 69:
case 970:
case 3114:
case 1573:
case 4012:
case 2120:
case 935:
case 3685:
case 4078:
case 179:
case 2583:
case 1952:
case 1961:
case 2331:
case 1803:
case 4042:
case 3315:
case 3427:
case 1815:
case 2597:
case 3144:
case 3472:
case 906:
case 1586:
case 890:
case 2806:
case 350:
case 2995:
case 3189:
case 3967:
case 2820:
case 3814:
case 1314:
case 90:
case 2701:
case 3733:
case 3450:
case 1970:
case 302:
case 2362:
case 3889:
case 933:
case 3270:
case 2294:
case 2157:
case 2061:
case 449:
case 1724:
case 2052:
case 1649:
case 2980:
case 1095:
case 2404:
case 1344:
case 465:
case 3844:
case 1103:
case 1684:
case 3194:
case 3656:
case 4028:
case 3257:
case 245:
case 2547:
case 2037:
case 1523:
case 174:
case 3206:
case 382:
case 3496:
case 1908:
case 98:
case 269:
case 1231:
case 2852:
case 1439:
case 591:
case 660:
case 625:
case 1460:
case 2915:
case 1555:
case 4026:
case 72:
case 858:
case 227:
case 2528:
case 3498:
case 3477:
case 2517:
case 398:
case 2784:
case 2766:
case 307:
case 2367:
case 1920:
case 444:
case 2244:
case 312:
case 726:
case 2008:
case 623:
case 1471:
case 1763:
case 2749:
case 3979:
case 2870:
case 2832:
case 3951:
case 1045:
case 3962:
case 3894:
case 1015:
case 1251:
case 986:
case 1262:
case 1195:
case 1601:
case 2500:
case 1003:
case 3380:
case 441:
case 3237:
case 3220:
case 243:
case 2006:
case 2744:
case 2153:
case 2990:
case 2629:
case 3974:
case 448:
case 805:
case 2284:
case 2667:
case 1454:
case 3899:
case 1694:
case 3310:
case 2789:
case 1002:
case 1810:
case 3435:
case 1838:
case 1263:
case 2411:
case 416:
case 1085:
case 2125:
case 507:
case 1779:
case 3801:
case 2075:
case 512:
case 3340:
case 3737:
case 3720:
case 3336:
case 1274:
case 2714:
case 1807:
case 486:
case 1138:
case 1090:
case 2593:
case 3356:
case 3423:
case 1856:
case 83:
case 851:
case 3199:
case 2985:
case 3019:
case 2902:
case 941:
case 2853:
case 675:
case 1858:
case 41:
case 3358:
case 944:
case 3049:
case 3708:
case 3560:
case 854:
case 1434:
case 1598:
case 4087:
case 1140:
case 77:
case 2133:
case 121:
case 3084:
case 803:
case 2825:
case 1890:
case 3390:
case 1614:
case 1102:
case 2374:
case 1056:
case 2491:
case 1007:
case 1185:
case 406:
case 815:
case 1465:
case 2910:
case 2662:
case 2679:
case 2938:
case 1368:
case 2201:
case 1224:
case 1349:
case 1058:
case 8:
case 2794:
case 1689:
case 710:
case 3866:
case 1366:
case 1767:
case 2936:
case 2299:
case 470:
case 1644:
case 256:
case 435:
case 3119:
case 231:
case 757:
case 2907:
case 167:
case 885:
case 949:
case 1516:
case 3752:
case 399:
case 3385:
case 965:
case 550:
case 3488:
case 1010:
case 3645:
case 1953:
case 2582:
case 1548:
case 2513:
case 1569:
case 2958:
case 1040:
case 3615:
case 272:
case 129:
case 2631:
case 813:
case 587:
case 1530:
case 3184:
case 1527:
case 2033:
case 1546:
case 3486:
case 40:
case 1925:
case 234:
case 310:
case 1211:
case 2309:
case 1449:
case 469:
case 1900:
case 1466:
case 3544:
case 2183:
case 2604:
case 808:
case 445:
case 2092:
case 2520:
case 1621:
case 1023:
case 2474:
case 1188:
case 2391:
case 173:
case 1173:
case 3865:
case 1781:
case 2026:
case 3911:
case 593:
case 1419:
case 1241:
case 3672:
case 1503:
case 3630:
case 595:
case 3226:
case 3669:
case 2897:
case 2955:
case 2506:
case 3787:
case 175:
case 1864:
case 3386:
case 3646:
case 3793:
case 1917:
case 130:
case 244:
case 380:
case 2557:
case 897:
case 1947:
case 2876:
case 3217:
case 443:
case 3228:
case 3165:
case 2923:
case 624:
case 2739:
case 3648:
case 2760:
case 1888:
case 678:
case 3388:
case 799:
case 2508:
case 1926:
case 2117:
case 956:
case 526:
case 1401:
case 2097:
case 4032:
case 818:
case 1580:
case 2012:
case 2800:
case 2128:
case 2083:
case 1291:
case 1155:
case 461:
case 3436:
case 1086:
case 2721:
case 1704:
case 1354:
case 3854:
case 464:
case 2076:
case 1499:
case 3410:
case 1659:
case 3594:
case 3438:
case 2311:
case 2532:
case 2147:
case 3242:
case 934:
case 2561:
case 640:
case 3713:
case 1639:
case 968:
case 794:
case 3834:
case 888:
case 37:
case 3677:
case 3698:
case 2817:
case 3622:
case 3407:
case 220:
case 1135:
case 1823:
case 3456:
case 667:
case 249:
case 4061:
case 3154:
case 3743:
case 3297:
case 95:
case 2826:
case 931:
case 3283:
case 52:
case 289:
case 2703:
case 96:
case 1275:
case 657:
case 2353:
case 1307:
case 436:
case 324:
case 1706:
case 1757:
case 3090:
case 1356:
case 3110:
case 378:
case 3140:
case 3598:
case 532:
case 2492:
case 848:
case 1084:
case 2417:
case 3975:
case 1358:
case 3858:
case 958:
case 680:
case 1708:
case 2063:
case 2285:
case 3810:
case 81:
case 3156:
case 4081:
case 1571:
case 2632:
case 3263:
case 1559:
case 454:
case 1974:
case 3454:
case 201:
case 3399:
case 403:
case 2966:
case 2984:
case 204:
case 253:
case 3158:
case 451:
case 3274:
case 1963:
case 1680:
case 2949:
case 1801:
case 2333:
case 966:
case 3762:
case 1340:
case 3840:
case 199:
case 1473:
case 1385:
case 1645:
case 2258:
case 3010:
case 1302:
case 2442:
case 3953:
case 2476:
case 579:
case 1119:
case 652:
case 483:
case 2795:
case 835:
case 3546:
case 2657:
case 1464:
case 2256:
case 2207:
case 2606:
case 284:
case 1149:
case 67:
case 2375:
case 3569:
case 1253:
case 1603:
case 1001:
case 1184:
case 3465:
case 2240:
case 413:
case 209:
case 1924:
case 211:
case 3368:
case 3319:
case 1390:
case 4004:
case 3890:
case 80:
case 3102:
case 3185:
case 2620:
case 3007:
case 2999:
case 2236:
case 1884:
case 3366:
case 3384:
case 3767:
case 833:
case 3644:
case 3224:
case 2863:
case 214:
case 2901:
case 3058:
case 1732:
case 3689:
case 459:
case 740:
case 3886:
case 1364:
case 827:
case 180:
case 1630:
case 2475:
case 729:
case 2383:
case 694:
case 547:
case 2378:
case 2041:
case 3873:
case 2011:
case 560:
case 1648:
case 691:
case 869:
case 4031:
case 2682:
case 2605:
case 2342:
case 1402:
case 3888:
case 3926:
case 3035:
case 3947:
case 2722:
case 2798:
case 2777:
case 157:
case 408:
case 845:
case 1292:
case 3484:
case 1544:
case 3449:
case 1589:
case 953:
case 1941:
case 3055:
case 3164:
case 904:
case 2235:
case 4062:
case 3900:
case 4051:
case 2579:
case 919:
case 1865:
case 3365:
case 901:
case 2551:
case 3468:
case 1490:
case 3188:
case 3023:
case 1514:
case 3173:
case 373:
case 1834:
case 3334:
case 2328:
case 17:
case 542:
case 2392:
case 838:
case 721:
case 2141:
case 864:
case 1622:
case 3595:
case 290:
case 2425:
case 1458:
case 59:
case 3912:
case 2748:
case 1782:
case 3997:
case 1355:
case 3639:
case 152:
case 1278:
case 2769:
case 1743:
case 762:
case 1696:
case 1065:
case 418:
case 3942:
case 981:
case 2453:
case 2772:
case 2091:
case 446:
case 2693:
case 3135:
case 724:
case 2687:
case 1323:
case 3155:
case 914:
case 44:
case 1909:
case 2750:
case 2841:
case 2433:
case 3401:
case 2300:
case 1134:
case 492:
case 3123:
case 3088:
case 1335:
case 3835:
case 3073:
case 3209:
case 1438:
case 2811:
case 1594:
case 3671:
case 3704:
case 911:
case 488:
case 176:
case 1854:
case 1991:
case 2529:
case 104:
case 2720:
case 2737:
case 1966:
case 1984:
case 495:
case 1290:
case 3833:
case 1333:
case 3268:
case 3219:
case 2963:
case 1949:
case 2680:
case 1581:
case 3075:
case 2435:
case 1670:
case 1632:
case 3789:
case 2559:
case 1919:
case 3324:
case 119:
case 2899:
case 3667:
case 2695:
case 1492:
case 1428:
case 1417:
case 1325:
case 294:
case 2084:
case 2066:
case 2539:
case 2358:
case 1202:
case 2455:
case 2708:
case 2049:
case 1063:
case 2019:
case 3985:
case 2068:
case 1703:
case 189:
case 66:
case 1426:
case 1715:
case 1124:
case 3587:
case 765:
case 1447:
case 2307:
case 155:
case 2423:
case 3593:
case 2356:
case 2757:
case 720:
case 3299:
case 3025:
case 896:
case 2884:
case 2866:
case 4021:
case 1901:
case 1238:
case 114:
case 2849:
case 3940:
case 900:
case 2732:
case 3662:
case 2819:
case 2868:
case 111:
case 3201:
case 2233:
case 3938:
case 3679:
case 1874:
case 42:
case 3374:
case 2390:
case 1637:
case 1999:
case 1236:
case 2521:
case 3491:
case 1620:
case 1657:
case 2486:
case 368:
case 1163:
case 2149:
case 184:
case 334:
case 1207:
case 372:
case 1412:
case 2615:
case 3958:
case 3033:
case 2166:
case 2184:
case 3631:
case 690:
case 2603:
case 2385:
case 3505:
case 2752:
case 2473:
case 1024:
case 564:
case 842:
case 538:
case 2488:
case 2645:
case 1258:
case 1174:
case 1442:
case 2225:
case 35:
case 331:
case 3907:
case 2168:
case 181:
case 89:
case 522:
case 952:
case 741:
case 3956:
case 1795:
case 4089:
case 601:
case 3176:
case 2650:
case 2911:
case 619:
case 586:
case 498:
case 3537:
case 3142:
case 3474:
case 2490:
case 4044:
case 2514:
case 1891:
case 3047:
case 1954:
case 2544:
case 3178:
case 3254:
case 3604:
case 3028:
case 2034:
case 3183:
case 2941:
case 604:
case 210:
case 3771:
case 1809:
case 482:
case 1235:
case 3759:
case 2485:
case 1613:
case 1682:
case 655:
case 3739:
case 1011:
case 3508:
case 548:
case 2388:
case 1605:
case 3760:
case 516:
case 1777:
case 2217:
case 341:
case 1722:
case 2165:
case 257:
case 731:
case 734:
case 412:
case 1109:
case 3557:
case 2646:
case 407:
case 158:
case 2627:
case 994:
case 1531:
case 2672:
case 3955:
case 1378:
case 3897:
case 1796:
case 2618:
case 772:
case 2335:
case 1965:
case 3532:
case 2438:
case 1811:
case 3076:
case 2854:
case 2991:
case 200:
case 614:
case 363:
case 487:
case 3721:
case 1750:
case 3341:
case 3078:
case 1433:
case 2909:
case 3083:
case 2134:
case 4094:
case 3012:
case 50:
case 3128:
case 3192:
case 3265:
case 3681:
case 2297:
case 2278:
case 1718:
case 2743:
case 252:
case 349:
case 739:
case 1730:
case 1772:
case 3826:
case 3988:
case 1111:
case 320:
case 1693:
case 1091:
case 837:
case 1687:
case 2323:
case 365:
case 3964:
case 27:
case 3892:
case 777:
case 1392:
case 3828:
case 2834:
case 3100:
case 1328:
case 3817:
case 1425:
case 1317:
case 2677:
case 2698:
case 1716:
case 2276:
case 1141:
case 402:
case 2705:
case 3561:
case 3552:
case 1288:
case 570:
case 1009:
case 879:
case 1273:
case 3745:
case 2858:
case 3202:
case 2975:
case 3661:
case 3063:
case 597:
case 975:
case 2434:
case 2140:
case 790:
case 2598:
case 423:
case 1825:
case 1133:
case 221:
case 1587:
case 2138:
case 4077:
case 2807:
case 355:
case 3447:
case 895:
case 278:
case 2856:
case 2731:
case 139:
case 389:
case 1853:
case 1902:
case 3715:
case 262:
case 1441:
case 3333:
case 1268:
case 2301:
case 2779:
case 1833:
case 3949:
case 2840:
case 2762:
case 304:
case 2836:
case 447:
case 1714:
case 2158:
case 3290:
case 425:
case 1153:
case 1744:
case 2399:
case 301:
case 1266:
case 460:
case 3632:
case 2810:
case 2085:
case 3824:
case 2838:
case 1324:
case 3483:
case 2040:
case 172:
case 2518:
case 1875:
case 1543:
case 1958:
case 3375:
case 2527:
case 3497:
case 1631:
case 4048:
case 3256:
case 758:
case 3657:
case 2546:
case 168:
case 134:
case 240:
case 2925:
case 384:
case 3163:
case 3606:
case 4016:
case 649:
case 3476:
case 131:
case 15:
case 2516:
case 3795:
case 4069:
case 4018:
case 3608:
case 3024:
case 2038:
case 620:
case 1505:
case 1582:
case 2953:
case 665:
case 4072:
case 2190:
case 2548:
case 4027:
case 3174:
case 2802:
case 663:
case 2933:
case 3901:
case 3863:
case 2349:
case 3238:
case 1363:
case 1409:
case 2224:
case 442:
case 1940:
case 2058:
case 3210:
case 3504:
case 2767:
case 2384:
case 2366:
case 49:
case 2644:
case 156:
case 1374:
case 3874:
case 2056:
case 2890:
case 2614:
case 3236:
case 3999:
case 2007:
case 1491:
case 2185:
case 826:
case 1651:
case 2465:
case 1910:
case 1662:
case 2319:
case 311:
case 309:
case 1938:
case 962:
case 3777:
case 2947:
case 36:
case 3191:
case 3613:
case 3011:
case 2545:
case 2873:
case 1739:
case 2035:
case 3342:
case 4015:
case 924:
case 1000:
case 3383:
case 53:
case 3312:
case 3475:
case 2515:
case 1897:
case 677:
case 3397:
case 3041:
case 1955:
case 3643:
case 275:
case 898:
case 3223:
case 3934:
case 2928:
case 784:
case 230:
case 144:
case 2917:
case 1557:
case 3109:
case 2188:
case 812:
case 2621:
case 2173:
case 273:
case 3954:
case 1047:
case 1391:
case 807:
case 2781:
case 1026:
case 709:
case 711:
case 3579:
case 2468:
case 2241:
case 1176:
case 2419:
case 3551:
case 3562:
case 3809:
case 1771:
case 2449:
case 432:
case 3235:
case 505:
case 2900:
case 2186:
case 1759:
case 2484:
case 1178:
case 1604:
case 428:
case 1112:
case 1028:
case 3746:
case 3111:
case 2976:
case 3347:
case 2823:
case 3286:
case 3687:
case 4095:
case 3718:
case 631:
case 65:
case 3326:
case 3730:
case 3727:
case 967:
case 1988:
case 1552:
case 2912:
case 3288:
case 3273:
case 1892:
case 3328:
case 1100:
case 1828:
case 390:
case 3317:
case 2595:
case 3141:
case 3716:
case 701:
case 3567:
case 2704:
case 719:
case 1126:
case 2354:
case 1076:
case 2835:
case 802:
case 2659:
case 1042:
case 2123:
case 2671:
case 4080:
case 3811:
case 479:
case 1424:
case 1311:
case 3433:
case 1341:
case 1078:
case 3750:
case 1117:
case 1012:
case 1800:
case 1083:
case 753:
case 437:
case 2064:
case 2086:
case 1721:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750618801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,];
var gg_b = "1750618801/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
