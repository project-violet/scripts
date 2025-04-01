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
var o = 0;
switch (g) {
case 259:
case 2804:
case 2584:
case 935:
case 3751:
case 2111:
case 3175:
case 72:
case 1057:
case 3654:
case 3078:
case 366:
case 229:
case 761:
case 75:
case 880:
case 3338:
case 2701:
case 2672:
case 386:
case 3743:
case 1196:
case 3854:
case 2939:
case 2234:
case 3727:
case 1101:
case 3819:
case 3073:
case 1814:
case 147:
case 327:
case 3138:
case 197:
case 3930:
case 2098:
case 3183:
case 1795:
case 2810:
case 1600:
case 3892:
case 915:
case 3375:
case 1530:
case 4069:
case 2195:
case 1244:
case 476:
case 2562:
case 3944:
case 1949:
case 2522:
case 2093:
case 3692:
case 2610:
case 2262:
case 3085:
case 1396:
case 3549:
case 1580:
case 136:
case 3908:
case 961:
case 132:
case 95:
case 1525:
case 1431:
case 2213:
case 1265:
case 3314:
case 1508:
case 3965:
case 685:
case 3925:
case 1833:
case 599:
case 2577:
case 665:
case 3903:
case 2792:
case 1203:
case 2309:
case 2277:
case 1883:
case 981:
case 1750:
case 4093:
case 3801:
case 272:
case 1675:
case 2843:
case 276:
case 2441:
case 2867:
case 694:
case 1154:
case 549:
case 2648:
case 3159:
case 1997:
case 3696:
case 3297:
case 3465:
case 3042:
case 924:
case 2029:
case 1931:
case 3597:
case 2643:
case 2109:
case 2566:
case 3231:
case 954:
case 2526:
case 3343:
case 2244:
case 1489:
case 2949:
case 1522:
case 1093:
case 2301:
case 2800:
case 1610:
case 416:
case 824:
case 3788:
case 2580:
case 2230:
case 297:
case 3351:
case 1098:
case 2795:
case 3348:
case 602:
case 3434:
case 1810:
case 610:
case 1439:
case 2600:
case 3850:
case 1195:
case 881:
case 1701:
case 1534:
case 3376:
case 723:
case 2859:
case 436:
case 3036:
case 2196:
case 1939:
case 3934:
case 1234:
case 3239:
case 2101:
case 2061:
case 2814:
case 3609:
case 3143:
case 753:
case 159:
case 728:
case 2614:
case 1395:
case 630:
case 129:
case 3984:
case 85:
case 780:
case 3775:
case 2711:
case 1284:
case 1848:
case 1266:
case 2392:
case 557:
case 3310:
case 3172:
case 1226:
case 3926:
case 1851:
case 1627:
case 1029:
case 1350:
case 1566:
case 1643:
case 2875:
case 3064:
case 3811:
case 172:
case 815:
case 3759:
case 1843:
case 3477:
case 2119:
case 176:
case 1827:
case 1651:
case 212:
case 200:
case 1458:
case 775:
case 216:
case 1867:
case 1719:
case 648:
case 4057:
case 3241:
case 2481:
case 566:
case 3304:
case 3895:
case 3258:
case 1309:
case 1518:
case 1277:
case 2883:
case 3541:
case 2838:
case 923:
case 2503:
case 2750:
case 3110:
case 236:
case 1953:
case 3253:
case 2565:
case 1876:
case 2638:
case 2683:
case 980:
case 2431:
case 1213:
case 2265:
case 3426:
case 928:
case 2319:
case 3553:
case 582:
case 3695:
case 2508:
case 4061:
case 3466:
case 4021:
case 2833:
case 835:
case 2497:
case 2336:
case 2579:
case 2902:
case 2076:
case 3860:
case 2279:
case 3361:
case 976:
case 972:
case 3321:
case 1088:
case 415:
case 3952:
case 2345:
case 254:
case 3512:
case 1252:
case 4004:
case 1135:
case 1317:
case 1552:
case 2290:
case 3212:
case 901:
case 4072:
case 1083:
case 3620:
case 1499:
case 3994:
case 3299:
case 3001:
case 1294:
case 22:
case 398:
case 2043:
case 1736:
case 3161:
case 3599:
case 261:
case 180:
case 729:
case 2136:
case 1786:
case 1970:
case 4010:
case 2048:
case 393:
case 3270:
case 160:
case 1117:
case 281:
case 3842:
case 1745:
case 2051:
case 153:
case 435:
case 2869:
case 1075:
case 3157:
case 2717:
case 1468:
case 776:
case 3673:
case 2164:
case 454:
case 1428:
case 3878:
case 1724:
case 1405:
case 3729:
case 2332:
case 2072:
case 1142:
case 812:
case 2906:
case 175:
case 1764:
case 1423:
case 701:
case 1360:
case 1916:
case 3471:
case 1463:
case 306:
case 2415:
case 1320:
case 3956:
case 1821:
case 1256:
case 3516:
case 3873:
case 1861:
case 2382:
case 1342:
case 4051:
case 2898:
case 929:
case 836:
case 3092:
case 3523:
case 2364:
case 3547:
case 1963:
case 3223:
case 1923:
case 2406:
case 4043:
case 2437:
case 2893:
case 3205:
case 3568:
case 565:
case 3228:
case 59:
case 1120:
case 544:
case 2698:
case 3505:
case 2491:
case 330:
case 1968:
case 4027:
case 1160:
case 2786:
case 3757:
case 1474:
case 2745:
case 3398:
case 3824:
case 1829:
case 1778:
case 2335:
case 1186:
case 747:
case 1869:
case 2075:
case 1145:
case 385:
case 39:
case 2999:
case 859:
case 2736:
case 344:
case 2412:
case 530:
case 228:
case 2594:
case 161:
case 3721:
case 3761:
case 829:
case 936:
case 2385:
case 4000:
case 1345:
case 154:
case 2252:
case 1590:
case 2135:
case 2317:
case 124:
case 394:
case 2912:
case 475:
case 2083:
case 3990:
case 3198:
case 34:
case 916:
case 1579:
case 2185:
case 900:
case 2146:
case 1076:
case 1307:
case 3202:
case 1785:
case 4014:
case 1974:
case 510:
case 3502:
case 1746:
case 428:
case 1182:
case 947:
case 1760:
case 1893:
case 2782:
case 2000:
case 2928:
case 458:
case 2120:
case 662:
case 2160:
case 2968:
case 2342:
case 686:
case 1255:
case 732:
case 2571:
case 1132:
case 1010:
case 593:
case 3369:
case 135:
case 2963:
case 4075:
case 3329:
case 2416:
case 3050:
case 453:
case 801:
case 2556:
case 2916:
case 2360:
case 1415:
case 627:
case 2320:
case 543:
case 2657:
case 370:
case 2256:
case 3645:
case 2014:
case 1987:
case 3686:
case 657:
case 1382:
case 3129:
case 2468:
case 1991:
case 1124:
case 3291:
case 1004:
case 3886:
case 2661:
case 1164:
case 2428:
case 872:
case 2857:
case 1742:
case 1937:
case 3591:
case 2724:
case 3237:
case 311:
case 4038:
case 997:
case 2142:
case 275:
case 1906:
case 4083:
case 2764:
case 712:
case 2126:
case 914:
case 2972:
case 2509:
case 2166:
case 577:
case 2639:
case 2904:
case 1766:
case 2209:
case 2313:
case 1365:
case 3214:
case 2087:
case 3919:
case 1325:
case 725:
case 2839:
case 3056:
case 3954:
case 126:
case 1959:
case 3259:
case 1016:
case 2689:
case 1592:
case 1718:
case 741:
case 346:
case 1459:
case 1777:
case 3992:
case 3758:
case 2366:
case 2118:
case 2910:
case 3397:
case 9:
case 1047:
case 2326:
case 3419:
case 934:
case 1068:
case 609:
case 1713:
case 2765:
case 978:
case 50:
case 91:
case 1005:
case 3753:
case 1849:
case 2472:
case 1165:
case 3500:
case 2448:
case 1180:
case 3825:
case 569:
case 1988:
case 874:
case 1722:
case 3233:
case 2641:
case 1144:
case 3865:
case 651:
case 3533:
case 807:
case 2122:
case 2002:
case 2976:
case 621:
case 3808:
case 2853:
case 2653:
case 2340:
case 317:
case 2443:
case 1983:
case 2384:
case 955:
case 2427:
case 4091:
case 3803:
case 2295:
case 68:
case 838:
case 3538:
case 2841:
case 73:
case 2467:
case 589:
case 3052:
case 3496:
case 2730:
case 3996:
case 1881:
case 1296:
case 2967:
case 7:
case 1501:
case 734:
case 2927:
case 1483:
case 1438:
case 2943:
case 941:
case 3901:
case 3094:
case 1201:
case 2134:
case 71:
case 3275:
case 1975:
case 4015:
case 2476:
case 1740:
case 337:
case 87:
case 2511:
case 664:
case 303:
case 1897:
case 2140:
case 1070:
case 3822:
case 267:
case 1725:
case 2713:
case 2900:
case 3153:
case 2108:
case 2849:
case 1708:
case 1113:
case 2165:
case 2592:
case 841:
case 537:
case 2649:
case 2103:
case 2063:
case 1015:
case 2459:
case 1910:
case 4070:
case 3210:
case 1326:
case 287:
case 2219:
case 938:
case 2554:
case 3781:
case 1087:
case 2914:
case 2325:
case 1410:
case 825:
case 3834:
case 1839:
case 369:
case 3640:
case 3353:
case 2308:
case 2519:
case 2254:
case 222:
case 3684:
case 2016:
case 855:
case 891:
case 1377:
case 4012:
case 790:
case 1972:
case 907:
case 1889:
case 3884:
case 3504:
case 1166:
case 1318:
case 3731:
case 1509:
case 1037:
case 389:
case 1639:
case 3341:
case 3634:
case 3572:
case 2726:
case 1904:
case 517:
case 3797:
case 1209:
case 3358:
case 2303:
case 1211:
case 3551:
case 2784:
case 81:
case 3911:
case 2975:
case 4063:
case 279:
case 4023:
case 2831:
case 3826:
case 1184:
case 487:
case 1511:
case 77:
case 3248:
case 2488:
case 2897:
case 1948:
case 8:
case 1362:
case 3267:
case 713:
case 2296:
case 2881:
case 467:
case 3227:
case 834:
case 3626:
case 1927:
case 2344:
case 2596:
case 2483:
case 2438:
case 2380:
case 2201:
case 2099:
case 1653:
case 1595:
case 139:
case 2130:
case 3877:
case 663:
case 2983:
case 3090:
case 1384:
case 738:
case 3995:
case 1295:
case 1858:
case 3613:
case 1467:
case 2933:
case 2988:
case 2180:
case 1641:
case 1334:
case 596:
case 2144:
case 3813:
case 592:
case 2762:
case 814:
case 683:
case 3677:
case 1780:
case 4016:
case 3411:
case 1162:
case 41:
case 3025:
case 4039:
case 3105:
case 241:
case 2282:
case 3960:
case 2429:
case 3316:
case 1260:
case 1612:
case 2469:
case 3128:
case 2582:
case 2053:
case 2232:
case 4:
case 3147:
case 4089:
case 434:
case 2771:
case 2155:
case 2532:
case 473:
case 3003:
case 2058:
case 1171:
case 363:
case 3368:
case 320:
case 350:
case 1899:
case 3894:
case 3305:
case 3706:
case 1371:
case 3363:
case 1542:
case 852:
case 3420:
case 2929:
case 856:
case 255:
case 822:
case 3942:
case 414:
case 2355:
case 939:
case 234:
case 3557:
case 3312:
case 2390:
case 2806:
case 2493:
case 2837:
case 3978:
case 2245:
case 1352:
case 3446:
case 4058:
case 2891:
case 3261:
case 2691:
case 1961:
case 3973:
case 564:
case 3221:
case 2039:
case 1194:
case 3856:
case 3199:
case 719:
case 2637:
case 3521:
case 3435:
case 2815:
case 3871:
case 1152:
case 1535:
case 3370:
case 1461:
case 214:
case 3112:
case 107:
case 2190:
case 2998:
case 1668:
case 1868:
case 1285:
case 1457:
case 3478:
case 3702:
case 23:
case 1663:
case 3671:
case 3399:
case 3417:
case 138:
case 395:
case 3269:
case 36:
case 1264:
case 752:
case 2542:
case 125:
case 756:
case 1929:
case 3924:
case 155:
case 3026:
case 2242:
case 722:
case 1564:
case 407:
case 3569:
case 3482:
case 2097:
case 2870:
case 726:
case 1524:
case 2670:
case 290:
case 438:
case 2899:
case 38:
case 3723:
case 3337:
case 1602:
case 767:
case 1771:
case 3306:
case 1155:
case 1532:
case 2755:
case 2171:
case 2560:
case 3768:
case 2356:
case 3879:
case 3982:
case 1874:
case 3387:
case 3705:
case 2612:
case 364:
case 2260:
case 1802:
case 787:
case 603:
case 1469:
case 2220:
case 345:
case 2868:
case 2246:
case 490:
case 3486:
case 3102:
case 2647:
case 2828:
case 4081:
case 2779:
case 2285:
case 926:
case 563:
case 13:
case 3293:
case 2663:
case 3174:
case 238:
case 520:
case 2623:
case 4031:
case 2823:
case 2235:
case 3407:
case 2605:
case 2152:
case 3712:
case 3436:
case 2535:
case 2421:
case 692:
case 2461:
case 1998:
case 1190:
case 568:
case 3298:
case 2668:
case 1536:
case 218:
case 2961:
case 642:
case 2921:
case 2194:
case 1039:
case 1637:
case 819:
case 967:
case 2816:
case 27:
case 1794:
case 1606:
case 3302:
case 134:
case 1390:
case 1806:
case 1089:
case 2278:
case 1:
case 1493:
case 309:
case 3040:
case 213:
case 2957:
case 3945:
case 1687:
case 3770:
case 173:
case 3986:
case 1286:
case 1891:
case 2578:
case 1973:
case 4013:
case 318:
case 3273:
case 2374:
case 1199:
case 1856:
case 1561:
case 3573:
case 445:
case 2936:
case 37:
case 464:
case 2799:
case 2907:
case 3816:
case 484:
case 3616:
case 2084:
case 4077:
case 3217:
case 1312:
case 1170:
case 313:
case 209:
case 3278:
case 1257:
case 1485:
case 1656:
case 3957:
case 2986:
case 1446:
case 1946:
case 3647:
case 2022:
case 2655:
case 3868:
case 3285:
case 3779:
case 1985:
case 2445:
case 3663:
case 3394:
case 2293:
case 1702:
case 1080:
case 48:
case 338:
case 3585:
case 1044:
case 2174:
case 591:
case 2407:
case 3823:
case 555:
case 2712:
case 495:
case 3790:
case 46:
case 3152:
case 2598:
case 1871:
case 451:
case 3863:
case 333:
case 1370:
case 3628:
case 525:
case 3421:
case 989:
case 421:
case 2298:
case 3847:
case 1473:
case 1112:
case 1030:
case 3461:
case 2932:
case 409:
case 2306:
case 2763:
case 1715:
case 3812:
case 573:
case 4084:
case 2391:
case 1003:
case 534:
case 2747:
case 3171:
case 1163:
case 2115:
case 3755:
case 1105:
case 846:
case 1025:
case 2728:
case 2013:
case 1442:
case 842:
case 3520:
case 2982:
case 2690:
case 619:
case 1168:
case 1960:
case 2424:
case 3220:
case 51:
case 1920:
case 1128:
case 1420:
case 251:
case 3542:
case 2315:
case 26:
case 1694:
case 295:
case 2924:
case 3031:
case 2229:
case 168:
case 2106:
case 2482:
case 904:
case 892:
case 221:
case 1347:
case 2026:
case 183:
case 769:
case 2529:
case 2066:
case 3670:
case 163:
case 1328:
case 4022:
case 639:
case 1368:
case 2716:
case 150:
case 1407:
case 652:
case 2935:
case 1712:
case 656:
case 3815:
case 2871:
case 622:
case 1298:
case 626:
case 3190:
case 2030:
case 314:
case 2112:
case 2946:
case 1102:
case 804:
case 1655:
case 992:
case 2985:
case 3615:
case 2399:
case 1293:
case 877:
case 33:
case 2417:
case 488:
case 2044:
case 3806:
case 2917:
case 3390:
case 334:
case 1040:
case 3493:
case 667:
case 3837:
case 3:
case 3586:
case 80:
case 2257:
case 3245:
case 3286:
case 4003:
case 2446:
case 373:
case 4065:
case 3887:
case 3379:
case 3691:
case 2261:
case 3536:
case 2199:
case 1034:
case 3039:
case 2856:
case 2561:
case 3207:
case 737:
case 1907:
case 889:
case 263:
case 538:
case 2368:
case 288:
case 1187:
case 2894:
case 4080:
case 2305:
case 3969:
case 151:
case 1964:
case 1315:
case 16:
case 2694:
case 1269:
case 195:
case 2706:
case 1191:
case 2460:
case 507:
case 1106:
case 1482:
case 1569:
case 3564:
case 391:
case 2942:
case 121:
case 3524:
case 1529:
case 574:
case 869:
case 1768:
case 2652:
case 2025:
case 1728:
case 742:
case 1013:
case 3874:
case 1982:
case 1879:
case 1690:
case 3802:
case 164:
case 2960:
case 1705:
case 3469:
case 1337:
case 1723:
case 1018:
case 937:
case 3771:
case 1391:
case 3674:
case 3532:
case 1747:
case 2163:
case 1115:
case 1401:
case 489:
case 1238:
case 921:
case 2877:
case 3983:
case 3012:
case 117:
case 3938:
case 2995:
case 1496:
case 1625:
case 995:
case 1583:
case 951:
case 1538:
case 2576:
case 1233:
case 3722:
case 1825:
case 98:
case 3933:
case 3762:
case 1149:
case 2079:
case 2813:
case 3144:
case 2749:
case 469:
case 2411:
case 655:
case 2911:
case 2551:
case 3784:
case 2548:
case 3831:
case 379:
case 2251:
case 4055:
case 3433:
case 3488:
case 2248:
case 2666:
case 3296:
case 1996:
case 2267:
case 945:
case 3697:
case 709:
case 2495:
case 964:
case 3734:
case 2227:
case 3438:
case 2243:
case 3631:
case 2139:
case 20:
case 1919:
case 4079:
case 3914:
case 868:
case 1214:
case 1559:
case 3365:
case 3219:
case 2781:
case 1056:
case 352:
case 1492:
case 795:
case 76:
case 3325:
case 751:
case 3308:
case 2353:
case 3254:
case 196:
case 1514:
case 1259:
case 269:
case 721:
case 3016:
case 2450:
case 2884:
case 404:
case 2272:
case 2840:
case 2731:
case 863:
case 2504:
case 539:
case 3726:
case 477:
case 2204:
case 63:
case 1131:
case 2909:
case 6:
case 2822:
case 2153:
case 3713:
case 2862:
case 1200:
case 3028:
case 3005:
case 673:
case 1880:
case 3125:
case 40:
case 3165:
case 3849:
case 1753:
case 2158:
case 2950:
case 1644:
case 3718:
case 2510:
case 3023:
case 3592:
case 142:
case 1680:
case 3459:
case 1071:
case 146:
case 2210:
case 1758:
case 387:
case 3414:
case 1830:
case 678:
case 1419:
case 764:
case 3047:
case 1543:
case 1666:
case 809:
case 3967:
case 3362:
case 1495:
case 2739:
case 3322:
case 1227:
case 3943:
case 208:
case 1243:
case 640:
case 10:
case 1139:
case 446:
case 4071:
case 1911:
case 1551:
case 2789:
case 2275:
case 3211:
case 587:
case 3184:
case 3951:
case 3948:
case 3140:
case 319:
case 1248:
case 2233:
case 1576:
case 950:
case 2288:
case 2825:
case 3448:
case 526:
case 3451:
case 988:
case 522:
case 2603:
case 1813:
case 3074:
case 3002:
case 492:
case 920:
case 3122:
case 2533:
case 3744:
case 2808:
case 3162:
case 3595:
case 2608:
case 690:
case 2238:
case 1877:
case 217:
case 1613:
case 2665:
case 3295:
case 2803:
case 1995:
case 3427:
case 3730:
case 2052:
case 2496:
case 3841:
case 1510:
case 3250:
case 246:
case 3550:
case 67:
case 403:
case 2992:
case 1055:
case 1622:
case 437:
case 2830:
case 3326:
case 2419:
case 613:
case 3725:
case 3404:
case 1409:
case 884:
case 2381:
case 3765:
case 2200:
case 2500:
case 2844:
case 3113:
case 408:
case 3889:
case 3972:
case 1272:
case 3126:
case 3377:
case 763:
case 3037:
case 2197:
case 3509:
case 3166:
case 3318:
case 88:
case 1634:
case 1341:
case 3639:
case 3091:
case 1358:
case 2131:
case 788:
case 1909:
case 3904:
case 3313:
case 3839:
case 2492:
case 2181:
case 1353:
case 169:
case 2954:
case 821:
case 3916:
case 3360:
case 110:
case 3423:
case 102:
case 3059:
case 2587:
case 3463:
case 1471:
case 1516:
case 3256:
case 949:
case 3821:
case 3657:
case 2287:
case 2686:
case 3014:
case 3661:
case 4095:
case 3468:
case 171:
case 3857:
case 3621:
case 3428:
case 2506:
case 554:
case 3405:
case 3724:
case 2237:
case 44:
case 1878:
case 2636:
case 1769:
case 1817:
case 375:
case 2607:
case 561:
case 1528:
case 55:
case 1635:
case 1568:
case 49:
case 3905:
case 659:
case 3928:
case 3120:
case 1228:
case 3000:
case 3160:
case 3968:
case 130:
case 1505:
case 1846:
case 1268:
case 3571:
case 1563:
case 2955:
case 231:
case 3342:
case 1092:
case 1971:
case 485:
case 2215:
case 3271:
case 1835:
case 3923:
case 3732:
case 3416:
case 676:
case 3252:
case 2095:
case 672:
case 2682:
case 2990:
case 148:
case 3912:
case 294:
case 3038:
case 3552:
case 24:
case 1494:
case 2832:
case 3185:
case 1820:
case 2202:
case 1860:
case 1793:
case 2979:
case 2193:
case 470:
case 3088:
case 143:
case 3033:
case 1321:
case 535:
case 1270:
case 3178:
case 886:
case 3786:
case 2757:
case 1842:
case 3117:
case 1570:
case 2864:
case 2011:
case 2393:
case 2664:
case 29:
case 328:
case 2624:
case 1161:
case 244:
case 3412:
case 3173:
case 198:
case 2721:
case 1642:
case 3385:
case 1096:
case 2761:
case 2563:
case 3487:
case 2646:
case 3255:
case 2247:
case 553:
case 3010:
case 3132:
case 493:
case 2456:
case 2523:
case 2685:
case 966:
case 2547:
case 335:
case 3693:
case 3364:
case 560:
case 2223:
case 3324:
case 1329:
case 3182:
case 498:
case 2568:
case 2205:
case 4001:
case 986:
case 2228:
case 528:
case 2846:
case 2673:
case 3004:
case 1537:
case 1129:
case 271:
case 3742:
case 1845:
case 957:
case 2729:
case 1237:
case 3937:
case 3906:
case 2817:
case 448:
case 111:
case 3072:
case 2617:
case 697:
case 2471:
case 1645:
case 2956:
case 170:
case 443:
case 1455:
case 3382:
case 2019:
case 2001:
case 32:
case 3669:
case 19:
case 1624:
case 3043:
case 2161:
case 1721:
case 361:
case 3107:
case 2599:
case 2452:
case 3773:
case 3136:
case 1761:
case 766:
case 786:
case 2270:
case 632:
case 3048:
case 4092:
case 1398:
case 3051:
case 3474:
case 1757:
case 2842:
case 1479:
case 3186:
case 3778:
case 2570:
case 3717:
case 1011:
case 3145:
case 1864:
case 2820:
case 3579:
case 1574:
case 1632:
case 4054:
case 1202:
case 727:
case 410:
case 3902:
case 4019:
case 3974:
case 3785:
case 3279:
case 3746:
case 1502:
case 757:
case 849:
case 2357:
case 2512:
case 3345:
case 2798:
case 2952:
case 248:
case 194:
case 324:
case 616:
case 600:
case 1832:
case 3735:
case 612:
case 4045:
case 529:
case 3481:
case 985:
case 3633:
case 2258:
case 1903:
case 4086:
case 2541:
case 3838:
case 830:
case 3883:
case 559:
case 2032:
case 2110:
case 3503:
case 1359:
case 3208:
case 2253:
case 1908:
case 681:
case 4036:
case 336:
case 1060:
case 731:
case 3525:
case 3683:
case 4007:
case 2913:
case 3319:
case 3508:
case 2695:
case 2553:
case 1314:
case 99:
case 1925:
case 2466:
case 1297:
case 2966:
case 3392:
case 806:
case 3709:
case 1531:
case 2926:
case 994:
case 2413:
case 1231:
case 2024:
case 1772:
case 3675:
case 1801:
case 2418:
case 654:
case 2477:
case 3119:
case 1114:
case 1403:
case 312:
case 1159:
case 2714:
case 1896:
case 3981:
case 624:
case 2376:
case 2539:
case 1854:
case 2036:
case 2167:
case 893:
case 2239:
case 3101:
case 2934:
case 635:
case 2609:
case 4082:
case 2086:
case 2809:
case 898:
case 79:
case 2462:
case 2589:
case 1751:
case 3659:
case 4032:
case 1078:
case 2940:
case 1480:
case 1338:
case 3711:
case 1017:
case 3449:
case 2484:
case 3949:
case 1944:
case 1249:
case 249:
case 970:
case 1133:
case 1776:
case 3280:
case 1549:
case 2962:
case 3544:
case 3800:
case 3580:
case 576:
case 848:
case 1046:
case 1930:
case 397:
case 1138:
case 3230:
case 1892:
case 2348:
case 843:
case 157:
case 3530:
case 2738:
case 405:
case 2850:
case 1611:
case 3754:
case 1477:
case 2114:
case 3843:
case 3458:
case 2896:
case 3719:
case 2281:
case 4085:
case 3867:
case 2300:
case 1966:
case 3667:
case 706:
case 2531:
case 3266:
case 3848:
case 702:
case 3851:
case 1926:
case 1413:
case 597:
case 3109:
case 3643:
case 1104:
case 3350:
case 3453:
case 2408:
case 3069:
case 1811:
case 1064:
case 2908:
case 660:
case 2060:
case 623:
case 831:
case 3876:
case 4073:
case 1913:
case 2965:
case 1082:
case 1695:
case 653:
case 1466:
case 628:
case 3518:
case 1258:
case 1304:
case 3958:
case 2710:
case 1541:
case 3676:
case 4017:
case 1977:
case 3277:
case 658:
case 730:
case 1372:
case 1918:
case 993:
case 1558:
case 2183:
case 4042:
case 227:
case 3439:
case 2892:
case 1434:
case 971:
case 2375:
case 1783:
case 2035:
case 1850:
case 500:
case 1484:
case 1650:
case 1343:
case 3093:
case 2085:
case 84:
case 906:
case 2692:
case 1922:
case 902:
case 894:
case 1327:
case 2046:
case 1733:
case 1176:
case 2619:
case 3804:
case 3395:
case 1809:
case 2748:
case 1422:
case 844:
case 3111:
case 1045:
case 3240:
case 266:
case 1940:
case 2078:
case 3284:
case 1775:
case 3989:
case 1984:
case 1007:
case 1376:
case 1127:
case 3701:
case 282:
case 930:
case 793:
case 1036:
case 4020:
case 1239:
case 2727:
case 3234:
case 536:
case 1143:
case 2073:
case 2430:
case 2819:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743530401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,];
var gg_b = "1743530401/";

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
