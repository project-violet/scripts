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
case 204:
case 2747:
case 1567:
case 441:
case 2952:
case 2380:
case 3482:
case 512:
case 2328:
case 2489:
case 1512:
case 1358:
case 3655:
case 1214:
case 809:
case 3543:
case 1178:
case 606:
case 4095:
case 1065:
case 3636:
case 148:
case 37:
case 748:
case 3885:
case 4071:
case 3381:
case 1253:
case 700:
case 2538:
case 368:
case 6:
case 319:
case 2464:
case 392:
case 824:
case 1049:
case 1008:
case 926:
case 3688:
case 1385:
case 1477:
case 3980:
case 3198:
case 1973:
case 43:
case 117:
case 2450:
case 717:
case 3518:
case 1726:
case 2756:
case 3033:
case 2586:
case 1488:
case 3061:
case 3858:
case 1651:
case 232:
case 135:
case 2981:
case 2179:
case 735:
case 503:
case 3451:
case 2272:
case 3279:
case 3266:
case 1344:
case 2393:
case 2302:
case 531:
case 2118:
case 3641:
case 3400:
case 4035:
case 223:
case 956:
case 334:
case 2286:
case 1790:
case 1441:
case 3028:
case 1073:
case 1637:
case 3080:
case 1496:
case 2948:
case 2640:
case 2960:
case 2668:
case 3313:
case 4056:
case 2808:
case 969:
case 3579:
case 3566:
case 593:
case 2274:
case 947:
case 509:
case 3004:
case 2954:
case 3842:
case 899:
case 54:
case 1267:
case 2849:
case 2795:
case 1813:
case 1684:
case 2605:
case 1119:
case 812:
case 1194:
case 2361:
case 3243:
case 1514:
case 2865:
case 2333:
case 1212:
case 1022:
case 2052:
case 266:
case 3902:
case 190:
case 1676:
case 1669:
case 321:
case 302:
case 1949:
case 2417:
case 2824:
case 3445:
case 2913:
case 259:
case 1965:
case 784:
case 854:
case 3360:
case 211:
case 696:
case 2523:
case 184:
case 1783:
case 664:
case 1553:
case 2238:
case 3348:
case 2041:
case 3290:
case 4034:
case 914:
case 2096:
case 1382:
case 1718:
case 3526:
case 3851:
case 1950:
case 1658:
case 3916:
case 2988:
case 933:
case 2628:
case 2920:
case 3739:
case 2291:
case 991:
case 3511:
case 2246:
case 1481:
case 1001:
case 338:
case 2850:
case 3146:
case 1397:
case 1888:
case 3191:
case 1195:
case 2794:
case 3429:
case 1685:
case 692:
case 46:
case 1743:
case 2531:
case 619:
case 668:
case 3005:
case 188:
case 875:
case 788:
case 3377:
case 1171:
case 67:
case 455:
case 1629:
case 410:
case 1989:
case 1515:
case 3767:
case 3444:
case 4092:
case 1270:
case 298:
case 3507:
case 262:
case 685:
case 3283:
case 345:
case 2257:
case 2703:
case 3882:
case 2889:
case 1017:
case 171:
case 1964:
case 364:
case 1454:
case 3609:
case 561:
case 2817:
case 2231:
case 2424:
case 3799:
case 3845:
case 2263:
case 744:
case 1215:
case 1025:
case 3876:
case 3654:
case 2862:
case 3163:
case 2055:
case 516:
case 2368:
case 987:
case 2036:
case 3753:
case 1570:
case 1917:
case 3230:
case 58:
case 1064:
case 2778:
case 939:
case 2130:
case 1962:
case 1642:
case 208:
case 2107:
case 3016:
case 1050:
case 2801:
case 2020:
case 2088:
case 3590:
case 2941:
case 1156:
case 2408:
case 1506:
case 2996:
case 277:
case 1766:
case 497:
case 3211:
case 3837:
case 2734:
case 1460:
case 1369:
case 2591:
case 634:
case 901:
case 922:
case 3648:
case 3660:
case 2064:
case 386:
case 3945:
case 2413:
case 1340:
case 3723:
case 740:
case 3665:
case 1787:
case 3805:
case 2527:
case 1130:
case 1465:
case 3969:
case 3976:
case 379:
case 360:
case 1817:
case 1424:
case 1792:
case 59:
case 997:
case 3082:
case 3571:
case 572:
case 2409:
case 3402:
case 2300:
case 3984:
case 1055:
case 2025:
case 2215:
case 2337:
case 1862:
case 1734:
case 1591:
case 2369:
case 2766:
case 2779:
case 1546:
case 543:
case 867:
case 3317:
case 3235:
case 1210:
case 3937:
case 3461:
case 3256:
case 3433:
case 1088:
case 1305:
case 3608:
case 487:
case 2050:
case 1126:
case 1661:
case 1633:
case 439:
case 1408:
case 2506:
case 1941:
case 736:
case 2156:
case 843:
case 96:
case 3364:
case 2397:
case 2888:
case 3535:
case 3951:
case 978:
case 955:
case 627:
case 1977:
case 1473:
case 3428:
case 4079:
case 4066:
case 981:
case 3556:
case 1041:
case 1510:
case 3037:
case 3821:
case 373:
case 3325:
case 3673:
case 2658:
case 2855:
case 2270:
case 798:
case 3738:
case 162:
case 3076:
case 265:
case 3997:
case 2062:
case 1321:
case 3127:
case 1825:
case 3493:
case 3045:
case 2964:
case 433:
case 2227:
case 2644:
case 25:
case 1183:
case 3350:
case 3271:
case 288:
case 1955:
case 3084:
case 1316:
case 3459:
case 2685:
case 2195:
case 491:
case 2743:
case 3547:
case 452:
case 1659:
case 1864:
case 50:
case 2171:
case 2629:
case 89:
case 3982:
case 2989:
case 1668:
case 3365:
case 3861:
case 2132:
case 3833:
case 3139:
case 1640:
case 1948:
case 1572:
case 4026:
case 3468:
case 3746:
case 330:
case 2342:
case 3791:
case 2239:
case 3232:
case 2860:
case 723:
case 1302:
case 357:
case 2637:
case 583:
case 2496:
case 3324:
case 4011:
case 2600:
case 2441:
case 2908:
case 889:
case 456:
case 2949:
case 159:
case 2676:
case 3587:
case 290:
case 3662:
case 2553:
case 2809:
case 1238:
case 837:
case 2103:
case 3617:
case 3802:
case 876:
case 3578:
case 1523:
case 1849:
case 679:
case 2924:
case 346:
case 3308:
case 2119:
case 2813:
case 1795:
case 3112:
case 2684:
case 780:
case 815:
case 1954:
case 3085:
case 180:
case 1909:
case 1052:
case 418:
case 61:
case 1771:
case 469:
case 3405:
case 4007:
case 1865:
case 2599:
case 4030:
case 3167:
case 794:
case 1361:
case 1333:
case 2022:
case 520:
case 3294:
case 3029:
case 194:
case 248:
case 93:
case 2852:
case 3664:
case 3503:
case 3859:
case 537:
case 2178:
case 129:
case 729:
case 2730:
case 3042:
case 1464:
case 2049:
case 2187:
case 395:
case 2707:
case 200:
case 1538:
case 820:
case 1747:
case 2922:
case 642:
case 104:
case 3929:
case 3689:
case 3519:
case 2358:
case 382:
case 2214:
case 1380:
case 3373:
case 3625:
case 3880:
case 1981:
case 3828:
case 1621:
case 1179:
case 941:
case 732:
case 673:
case 1735:
case 132:
case 2134:
case 3532:
case 2344:
case 3234:
case 3421:
case 1393:
case 1048:
case 463:
case 1272:
case 1304:
case 2385:
case 2008:
case 753:
case 3322:
case 3710:
case 2420:
case 1450:
case 217:
case 2726:
case 1359:
case 3983:
case 10:
case 1678:
case 3487:
case 4085:
case 228:
case 1970:
case 3871:
case 1517:
case 1264:
case 2742:
case 1197:
case 3391:
case 1687:
case 3895:
case 2236:
case 2453:
case 3346:
case 2957:
case 370:
case 3007:
case 1692:
case 840:
case 405:
case 934:
case 622:
case 2827:
case 2031:
case 2414:
case 2499:
case 562:
case 2390:
case 598:
case 4044:
case 808:
case 3505:
case 1151:
case 2946:
case 921:
case 3011:
case 3434:
case 4058:
case 836:
case 1472:
case 877:
case 2383:
case 2975:
case 2116:
case 1846:
case 639:
case 3120:
case 3708:
case 1395:
case 767:
case 2220:
case 167:
case 1733:
case 2288:
case 687:
case 3026:
case 1498:
case 430:
case 1875:
case 951:
case 3856:
case 577:
case 1810:
case 97:
case 1632:
case 536:
case 2307:
case 2046:
case 2439:
case 2091:
case 992:
case 2330:
case 968:
case 1347:
case 143:
case 2618:
case 3196:
case 1550:
case 2296:
case 1728:
case 363:
case 985:
case 1486:
case 2588:
case 2758:
case 3835:
case 2520:
case 772:
case 633:
case 1863:
case 172:
case 1335:
case 1027:
case 2057:
case 275:
case 3907:
case 1070:
case 79:
case 3083:
case 2536:
case 261:
case 1145:
case 482:
case 1564:
case 2815:
case 652:
case 2555:
case 2105:
case 862:
case 1619:
case 898:
case 3205:
case 28:
case 1759:
case 3494:
case 691:
case 2729:
case 3419:
case 540:
case 4042:
case 216:
case 3310:
case 1446:
case 2548:
case 387:
case 3675:
case 1378:
case 3646:
case 2972:
case 1475:
case 1898:
case 3228:
case 964:
case 3280:
case 4051:
case 1392:
case 996:
case 2086:
case 2737:
case 1508:
case 1872:
case 2128:
case 532:
case 2690:
case 2180:
case 2998:
case 4082:
case 880:
case 2366:
case 2470:
case 1334:
case 3762:
case 2769:
case 3717:
case 2683:
case 2814:
case 2193:
case 3892:
case 894:
case 2923:
case 2745:
case 1953:
case 504:
case 669:
case 618:
case 3398:
case 1695:
case 2784:
case 2104:
case 1185:
case 3471:
case 1705:
case 789:
case 189:
case 1914:
case 479:
case 254:
case 811:
case 1823:
case 3495:
case 3878:
case 2853:
case 2509:
case 3502:
case 2159:
case 529:
case 3204:
case 2023:
case 2213:
case 1332:
case 1249:
case 2867:
case 2630:
case 3894:
case 580:
case 2797:
case 3113:
case 209:
case 2812:
case 2607:
case 352:
case 1265:
case 3386:
case 1463:
case 4076:
case 314:
case 4069:
case 1224:
case 1014:
case 1099:
case 1431:
case 1647:
case 2552:
case 3789:
case 511:
case 3803:
case 2102:
case 3202:
case 4045:
case 3447:
case 1912:
case 3943:
case 442:
case 333:
case 1721:
case 3066:
case 1635:
case 2974:
case 3148:
case 523:
case 945:
case 1886:
case 1939:
case 3160:
case 4037:
case 473:
case 9:
case 1394:
case 832:
case 1319:
case 3233:
case 3261:
case 1410:
case 3580:
case 1573:
case 3528:
case 1874:
case 3610:
case 2986:
case 2161:
case 1254:
case 1782:
case 848:
case 3529:
case 2014:
case 2224:
case 381:
case 973:
case 3919:
case 641:
case 1415:
case 724:
case 3124:
case 3585:
case 800:
case 1209:
case 4005:
case 3736:
case 3078:
case 2332:
case 36:
case 1867:
case 4:
case 1797:
case 2265:
case 2142:
case 3149:
case 3087:
case 310:
case 74:
case 1630:
case 14:
case 2716:
case 4068:
case 3558:
case 3312:
case 3108:
case 2394:
case 3788:
case 2319:
case 3720:
case 193:
case 1839:
case 1986:
case 1133:
case 3367:
case 1161:
case 1626:
case 3777:
case 307:
case 438:
case 1248:
case 1581:
case 1072:
case 1260:
case 3034:
case 3411:
case 942:
case 731:
case 1974:
case 1611:
case 3818:
case 2392:
case 3258:
case 3741:
case 3796:
case 3879:
case 1700:
case 103:
case 2158:
case 1560:
case 2378:
case 986:
case 3032:
case 4016:
case 1548:
case 1074:
case 1972:
case 2475:
case 3934:
case 2012:
case 2222:
case 1252:
case 2185:
case 1784:
case 1853:
case 237:
case 2999:
case 2914:
case 884:
case 754:
case 2823:
case 3122:
case 548:
case 3542:
case 496:
case 1776:
case 1769:
case 1513:
case 1038:
case 3987:
case 215:
case 2953:
case 2457:
case 1427:
case 1814:
case 2565:
case 3670:
case 2144:
case 1923:
case 1577:
case 3200:
case 2347:
case 243:
case 3237:
case 1910:
case 1241:
case 982:
case 2486:
case 1520:
case 2100:
case 1296:
case 2780:
case 2728:
case 3418:
case 1075:
case 2632:
case 1168:
case 607:
case 33:
case 1140:
case 2810:
case 1439:
case 4033:
case 4061:
case 1330:
case 2474:
case 1046:
case 1307:
case 3781:
case 1105:
case 2694:
case 2619:
case 1785:
case 2704:
case 3807:
case 678:
case 610:
case 1643:
case 927:
case 52:
case 451:
case 865:
case 1412:
case 716:
case 468:
case 1729:
case 871:
case 116:
case 492:
case 78:
case 85:
case 3071:
case 2759:
case 3582:
case 3667:
case 1326:
case 175:
case 544:
case 1057:
case 775:
case 888:
case 4002:
case 2169:
case 2176:
case 3597:
case 3245:
case 2831:
case 272:
case 2262:
case 681:
case 3269:
case 3276:
case 1815:
case 2564:
case 1311:
case 3117:
case 29:
case 402:
case 2225:
case 374:
case 3306:
case 2182:
case 3883:
case 625:
case 2702:
case 957:
case 2692:
case 1870:
case 3971:
case 2289:
case 82:
case 565:
case 1827:
case 1390:
case 3653:
case 3164:
case 2517:
case 3545:
case 249:
case 2970:
case 4059:
case 1236:
case 1742:
case 2927:
case 844:
case 2423:
case 2197:
case 588:
case 3537:
case 3500:
case 3150:
case 2371:
case 2498:
case 2875:
case 1596:
case 2761:
case 1220:
case 267:
case 3056:
case 1541:
case 1679:
case 1666:
case 1121:
case 3327:
case 1991:
case 3890:
case 434:
case 1946:
case 2501:
case 4028:
case 3466:
case 1975:
case 3251:
case 3748:
case 4080:
case 413:
case 1346:
case 1007:
case 718:
case 466:
case 4052:
case 3197:
case 1391:
case 2569:
case 2576:
case 1478:
case 3264:
case 689:
case 349:
case 2545:
case 3517:
case 1765:
case 2653:
case 1623:
case 3678:
case 3970:
case 637:
case 2584:
case 1505:
case 2754:
case 615:
case 2282:
case 3289:
case 2995:
case 411:
case 1724:
case 1492:
case 2125:
case 274:
case 459:
case 2047:
case 756:
case 3225:
case 156:
case 81:
case 3692:
case 3182:
case 2614:
case 2699:
case 3702:
case 2748:
case 2251:
case 3472:
case 1568:
case 1221:
case 1011:
case 2890:
case 423:
case 1672:
case 3501:
case 573:
case 1177:
case 3371:
case 1216:
case 1026:
case 2056:
case 3906:
case 1188:
case 3891:
case 1990:
case 2537:
case 1120:
case 3846:
case 747:
case 2935:
case 1432:
case 1240:
case 873:
case 1268:
case 900:
case 2101:
case 2826:
case 3201:
case 3632:
case 1911:
case 1674:
case 1856:
case 1331:
case 4060:
case 3137:
case 683:
case 2418:
case 3728:
case 3550:
case 763:
case 4048:
case 3100:
case 3780:
case 2200:
case 1686:
case 2811:
case 2315:
case 2956:
case 3006:
case 2269:
case 3262:
case 3145:
case 1083:
case 3438:
case 1403:
case 935:
case 1907:
case 1638:
case 3831:
case 1930:
case 3027:
case 3217:
case 2162:
case 3863:
case 2597:
case 3169:
case 404:
case 3176:
case 51:
case 3915:
case 1494:
case 842:
case 4013:
case 1722:
case 3356:
case 2667:
case 2752:
case 620:
case 2582:
case 586:
case 1205:
case 2071:
case 2284:
case 3704:
case 2807:
case 560:
case 126:
case 3525:
case 726:
case 3898:
case 477:
case 1691:
case 1979:
case 1966:
case 527:
case 1646:
case 739:
case 2934:
case 3491:
case 3039:
case 1323:
case 3740:
case 1675:
case 2032:
case 667:
case 187:
case 787:
case 3872:
case 2866:
case 3508:
case 3158:
case 1834:
case 1533:
case 2258:
case 2490:
case 2314:
case 2399:
case 1561:
case 297:
case 2606:
case 3273:
case 1228:
case 225:
case 4055:
case 3953:
case 3144:
case 2978:
case 722:
case 3565:
case 1762:
case 2244:
case 350:
case 2987:
case 315:
case 1372:
case 2627:
case 60:
case 337:
case 1204:
case 408:
case 1502:
case 3823:
case 2992:
case 3999:
case 649:
case 3012:
case 595:
case 2094:
case 2019:
case 1043:
case 1398:
case 440:
case 1887:
case 1471:
case 3705:
case 4036:
case 152:
case 3265:
case 3142:
case 2843:
case 752:
case 882:
case 1894:
case 1113:
case 1374:
case 2165:
case 2430:
case 2242:
case 1764:
case 1593:
case 191:
case 3249:
case 26:
case 2544:
case 3332:
case 2339:
case 791:
case 1943:
case 733:
case 1202:
case 3838:
case 1504:
case 1663:
case 1803:
case 462:
case 1559:
case 69:
case 3647:
case 498:
case 281:
case 3967:
case 714:
case 3014:
case 3099:
case 3431:
case 114:
case 3522:
case 643:
case 3939:
case 3303:
case 1148:
case 827:
case 1066:
case 1338:
case 3721:
case 965:
case 383:
case 2367:
case 1832:
case 3208:
case 1610:
case 1918:
case 207:
case 3656:
case 3874:
case 1528:
case 1750:
case 3410:
case 2108:
case 530:
case 3394:
case 2788:
case 1233:
case 1456:
case 2558:
case 2312:
case 3209:
case 658:
case 521:
case 2631:
case 675:
case 45:
case 2663:
case 1585:
case 2504:
case 1755:
case 3415:
case 2943:
case 471:
case 324:
case 1919:
case 2447:
case 181:
case 1092:
case 4062:
case 2386:
case 851:
case 1529:
case 781:
case 214:
case 3102:
case 3782:
case 2109:
case 3552:
case 1615:
case 3254:
case 885:
case 3630:
case 34:
case 710:
case 778:
case 155:
case 1087:
case 110:
case 178:
case 252:
case 1149:
case 309:
case 2764:
case 291:
case 16:
case 3867:
case 1165:
case 1430:
case 1242:
case 1339:
case 76:
case 1078:
case 3213:
case 616:
case 1544:
case 1903:
case 68:
case 2374:
case 707:
case 2610:
case 4001:
case 1777:
case 3161:
case 3986:
case 2832:
case 1720:
case 393:
case 1558:
case 2528:
case 1426:
case 3098:
case 2750:
case 3611:
case 1818:
case 3974:
case 331:
case 2338:
case 3581:
case 3406:
case 3737:
case 1866:
case 197:
case 1796:
case 2228:
case 797:
case 1490:
case 1258:
case 1741:
case 2561:
case 1314:
case 2181:
case 3972:
case 2966:
case 4050:
case 3281:
case 287:
case 3548:
case 1353:
case 2323:
case 834:
case 3560:
case 2878:
case 2495:
case 1122:
case 1992:
case 1285:
case 42:
case 2502:
case 3159:
case 977:
case 3853:
case 3509:
case 3784:
case 3104:
case 3252:
case 2259:
case 802:
case 1019:
case 2043:
case 3923:
case 1978:
case 444:
case 3193:
case 2892:
case 4025:
case 2717:
case 3899:
case 725:
case 1003:
case 1987:
case 3379:
case 1483:
case 1627:
case 3038:
case 1244:
case 585:
case 1418:
case 2516:
case 263:
case 3296:
case 2331:
case 2835:
case 3241:
case 2363:
case 1315:
case 3618:
case 904:
case 1237:
case 3910:
case 631:
case 3577:
case 2196:
case 2268:
case 3046:
case 1101:
case 3330:
case 3439:
case 3091:
case 2240:
case 2911:
case 2856:
case 4008:
case 2674:
case 3168:
case 13:
case 3075:
case 73:
case 845:
case 1582:
case 1667:
case 38:
case 1752:
case 3326:
case 400:
case 1071:
case 316:
case 2722:
case 1947:
case 2494:
case 3729:
case 4065:
case 3467:
case 1830:
case 226:
case 953:
case 1095:
case 3105:
case 3785:
case 64:
case 1612:
case 361:
case 596:
case 2083:
case 3815:
case 1117:
case 1276:
case 1269:
case 3744:
case 624:
case 141:
case 932:
case 1597:
case 8:
case 2907:
case 358:
case 612:
case 1995:
case 2492:
case 3031:
case 3414:
case 3499:
case 699:
case 1754:
case 3255:
case 490:
case 3870:
case 1971:
case 1614:
case 174:
case 923:
case 256:
case 2478:
case 2895:
case 1713:
case 4022:
case 269:
case 218:
case 3957:
case 3453:
case 3236:
case 5:
case 2871:
case 2623:
case 864:
case 2765:
case 3288:
case 3541:
case 2216:
case 2026:
case 1500:
case 3277:
case 3116:
case 2698:
case 538:
case 2188:
case 2990:
case 1537:
case 911:
case 2221:
case 1760:
case 3975:
case 1370:
case 1251:
case 1748:
case 3383:
case 1479:
case 2568:
case 2357:
case 1890:
case 3991:
case 2672:
case 3666:
case 3679:
case 3121:
case 1327:
case 665:
case 2731:
case 2292:
case 1655:
case 2763:
case 461:
case 1482:
case 878:
case 2625:
case 2373:
case 185:
case 1904:
case 2985:
case 1002:
case 65:
case 475:
case 458:
case 3455:
case 2689:
case 2199:
case 3682:
case 525:
case 1844:
case 416:
case 192:
case 3049:
case 719:
case 3253:
case 3436:
case 688:
case 48:
case 3697:
case 1885:
case 3187:
case 3707:
case 1381:
case 295:
case 2503:
case 2859:
case 17:
case 2153:
case 2287:
case 348:
case 3065:
case 1993:
case 3178:
case 1829:
case 1497:
case 2710:
case 1033:
case 4091:
case 3488:
case 1518:
case 2416:
case 4046:
case 317:
case 3973:
case 1620:
case 4075:
case 1980:
case 1198:
case 3008:
case 2650:
case 2234:
case 3711:
case 3344:
case 2532:
case 597:
case 807:
case 1266:
case 99:
case 3651:
case 1080:
case 3073:
case 713:
case 3790:
case 2058:
case 3441:
case 2324:
case 1696:
case 1186:
case 1437:
case 3860:
case 1961:
case 734:
case 1641:
case 257:
case 3848:
case 1309:
case 1579:
case 2440:
case 2601:
case 2791:
case 3239:
case 2534:
case 4010:
case 2139:
case 507:
case 3132:
case 2833:
case 2861:
case 2365:
case 949:
case 1174:
case 2775:
case 2405:
case 56:
case 1902:
case 2029:
case 2219:
case 2592:
case 1243:
case 3599:
case 3813:
case 2308:
case 510:
case 3194:
case 3267:
case 2085:
case 62:
case 3645:
case 2617:
case 2802:
case 581:
case 3809:
case 2044:
case 1476:
case 1469:
case 1360:
case 4031:
case 1093:
case 1445:
case 644:
case 3949:
case 102:
case 1727:
case 3854:
case 3676:
case 205:
case 1138:
case 2203:
case 273:
case 2673:
case 431:
case 1916:
case 635:
case 1851:
case 2000:
case 3658:
case 1355:
case 2428:
case 1526:
case 83:
case 2106:
case 2786:
case 1921:
case 1191:
case 3001:
case 2951:
case 1146:
case 920:
case 1336:
case 1068:
case 617:
case 2774:
case 1175:
case 3481:
case 493:
case 1767:
case 1652:
case 2295:
case 2547:
case 706:
case 3836:
case 44:
case 3171:
case 1485:
case 2404:
case 2459:
case 3452:
case 1005:
case 2350:
case 2271:
case 388:
case 1320:
case 1388:
case 1897:
case 3227:
case 3017:
case 242:
case 2045:
case 745:
case 1882:
case 3644:
case 2170:
case 2738:
case 3270:
case 1157:
case 1507:
case 2069:
case 1444:
case 3300:
case 1905:
case 2624:
case 2402:
case 3409:
case 2595:
case 1869:
case 344:
case 1654:
case 1163:
case 1131:
case 3337:
case 3215:
case 1845:
case 499:
case 3147:
case 1609:
case 684:
case 2115:
case 196:
case 1714:
case 1799:
case 2571:
case 3454:
case 1396:
case 2082:
case 2805:
case 2649:
case 3642:
case 3962:
case 260:
case 2969:
case 2976:
case 3527:
case 2723:
case 3413:
case 1442:
case 3064:
case 1207:
case 1583:
case 2665:
case 1753:
case 976:
case 2256:
case 989:
case 2608:
case 4074:
case 1016:
case 1968:
case 1648:
case 3345:
case 3841:
case 1940:
case 2317:
case 4086:
case 1800:
case 3448:
case 915:
case 2772:
case 179:
case 160:
case 1097:
case 779:
case 760:
case 476:
case 2613:
case 3787:
case 1301:
case 1649:
case 340:
case 3036:
case 11:
case 2583:
case 3368:
case 489:
case 1945:
case 3778:
case 1723:
case 3449:
case 186:
case 2654:
case 903:
case 2876:
case 659:
case 2131:
case 1984:
case 3055:
case 818:
case 869:
case 1402:
case 450:
case 2396:
case 264:
case 1082:
case 2341:
case 2845:
case 611:
case 3263:
case 3817:
case 3231:
case 2799:
case 1115:
case 2940:
case 623:
case 1317:
case 3575:
case 2968:
case 3546:
case 847:
case 3591:
case 912:
case 563:
case 2021:
case 2211:
case 2837:
case 3734:
case 1840:
case 954:
case 2110:
case 3996:
case 3661:
case 1868:
case 1900:
case 3801:
case 1798:
case 2226:
case 1433:
case 2590:
case 3210:
case 3020:
case 1937:
case 1461:
case 1951:
case 238:
case 863:
case 2146:
case 1535:
case 653:
case 2191:
case 547:
case 2681:
case 3732:
case 2739:
case 2336:
case 2175:
case 3246:
case 2916:
case 1000:
case 1037:
case 3920:
case 173:
case 924:
case 773:
case 483:
case 2290:
case 1556:
case 2458:
case 3473:
case 1428:
case 2526:
case 3977:
case 3096:
case 1480:
case 3889:
case 3693:
case 2882:
case 556:
case 3183:
case 931:
case 3825:
case 826:
case 1076:
case 1738:
case 362:
case 398:
case 1982:
case 1404:
case 2377:
case 206:
case 629:
case 3659:
case 2767:
case 1547:
case 1295:
case 2320:
case 3531:
case 3563:
case 3794:
case 3719:
case 518:
case 2897:
case 993:
case 570:
case 569:
case 1459:
case 1271:
case 3955:
case 1084:
case 1791:
case 467:
case 1349:
case 3274:
case 3081:
case 3572:
case 2566:
case 3401:
case 1775:
case 3640:
case 3948:
case 677:
case 928:
case 1833:
case 1139:
case 3668:
case 3286:
case 1324:
case 213:
case 2354:
case 2028:
case 2218:
case 2400:
case 2309:
case 3302:
case 2706:
case 2696:
case 3462:
case 2469:
case 514:
case 3238:
case 1617:
case 1802:
case 105:
case 1587:
case 1662:
case 705:
case 1203:
case 533:
case 3913:
case 359:
case 1942:
case 202:
case 221:
case 3333:
case 1294:
case 1029:
case 1219:
case 3865:
case 1167:
case 1592:
case 3361:
case 2484:
case 3771:
case 366:
case 2059:
case 591:
case 3052:
case 3954:
case 552:
case 40:
case 3605:
case 449:
case 1112:
case 3849:
case 146:
case 795:
case 1804:
case 2381:
case 1042:
case 292:
case 219:
case 3013:
case 1278:
case 3223:
case 251:
case 2636:
case 2993:
case 329:
case 1664:
case 3489:
case 1625:
case 2482:
case 662:
case 3054:
case 285:
case 4070:
case 2904:
case 1292:
case 1763:
case 1594:
case 852:
case 1199:
case 1689:
case 2715:
case 3747:
case 304:
case 2002:
case 3272:
case 3574:
case 961:
case 2451:
case 1421:
case 3393:
case 332:
case 2858:
case 2172:
case 3873:
case 1828:
case 958:
case 3179:
case 1880:
case 2518:
case 3359:
case 3298:
case 2061:
case 3586:
case 916:
case 1322:
case 2980:
case 3304:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1765569601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,];
var gg_b = "1765569601/";

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
