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
case 1621:
case 800:
case 2621:
case 551:
case 2988:
case 2268:
case 1988:
case 1899:
case 3833:
case 1130:
case 2130:
case 3705:
case 3612:
case 92:
case 1411:
case 2411:
case 3687:
case 3986:
case 3266:
case 2075:
case 3930:
case 1075:
case 1186:
case 2186:
case 148:
case 1103:
case 3800:
case 1347:
case 2645:
case 2347:
case 1894:
case 2357:
case 1357:
case 795:
case 3165:
case 3534:
case 458:
case 3821:
case 3404:
case 67:
case 794:
case 1081:
case 2174:
case 2490:
case 1490:
case 4044:
case 3027:
case 2313:
case 3257:
case 1313:
case 4054:
case 3750:
case 3718:
case 3247:
case 709:
case 2763:
case 1763:
case 2593:
case 3409:
case 1600:
case 3845:
case 3371:
case 2285:
case 2366:
case 2179:
case 3855:
case 1179:
case 2232:
case 3606:
case 3031:
case 3360:
case 4019:
case 2162:
case 167:
case 4:
case 267:
case 299:
case 122:
case 3837:
case 205:
case 3815:
case 1724:
case 1608:
case 104:
case 3683:
case 2498:
case 1498:
case 2756:
case 2729:
case 1729:
case 3758:
case 3962:
case 2343:
case 2589:
case 2852:
case 3748:
case 319:
case 3217:
case 1806:
case 387:
case 3253:
case 2335:
case 2637:
case 2936:
case 1936:
case 2883:
case 1382:
case 3180:
case 2382:
case 86:
case 3791:
case 2767:
case 554:
case 3072:
case 350:
case 1597:
case 3561:
case 2597:
case 1576:
case 2576:
case 2980:
case 1260:
case 1980:
case 43:
case 3642:
case 1451:
case 1441:
case 1138:
case 2138:
case 3414:
case 2706:
case 1706:
case 2985:
case 377:
case 2386:
case 1386:
case 1303:
case 677:
case 2147:
case 2802:
case 1783:
case 2783:
case 3708:
case 3624:
case 519:
case 2157:
case 3891:
case 2867:
case 1867:
case 3947:
case 3646:
case 2420:
case 1420:
case 1078:
case 3957:
case 2658:
case 479:
case 3076:
case 2330:
case 1330:
case 3185:
case 456:
case 100:
case 550:
case 543:
case 3913:
case 801:
case 941:
case 355:
case 3171:
case 3715:
case 2166:
case 962:
case 403:
case 655:
case 2401:
case 99:
case 2846:
case 3089:
case 2971:
case 1846:
case 3365:
case 3667:
case 3492:
case 2374:
case 1374:
case 1829:
case 768:
case 3858:
case 1113:
case 2113:
case 1968:
case 1288:
case 1816:
case 3721:
case 4073:
case 2527:
case 2712:
case 3840:
case 1712:
case 2605:
case 2307:
case 2143:
case 2280:
case 1280:
case 2960:
case 3850:
case 3818:
case 2153:
case 351:
case 945:
case 1863:
case 3160:
case 437:
case 804:
case 2039:
case 822:
case 2236:
case 1495:
case 3745:
case 3238:
case 2428:
case 1428:
case 3917:
case 3336:
case 2070:
case 3262:
case 3982:
case 3449:
case 2640:
case 1338:
case 2618:
case 2650:
case 26:
case 3444:
case 292:
case 1564:
case 2135:
case 4004:
case 229:
case 3207:
case 1436:
case 842:
case 2295:
case 2436:
case 4066:
case 2506:
case 924:
case 2723:
case 1723:
case 357:
case 431:
case 925:
case 3684:
case 902:
case 3151:
case 657:
case 1359:
case 3508:
case 1583:
case 1925:
case 1326:
case 833:
case 2925:
case 2326:
case 2951:
case 584:
case 2344:
case 1941:
case 1876:
case 3125:
case 1354:
case 2354:
case 3861:
case 3689:
case 2480:
case 2772:
case 3067:
case 1091:
case 680:
case 3198:
case 570:
case 3024:
case 2884:
case 1884:
case 4057:
case 375:
case 3244:
case 3407:
case 3515:
case 3537:
case 674:
case 1731:
case 2731:
case 2177:
case 1177:
case 3462:
case 2048:
case 1048:
case 260:
case 410:
case 3996:
case 3676:
case 3977:
case 2228:
case 1058:
case 1010:
case 2058:
case 3029:
case 2998:
case 3056:
case 2542:
case 3226:
case 1542:
case 727:
case 1552:
case 2552:
case 741:
case 2889:
case 3521:
case 488:
case 3834:
case 20:
case 2018:
case 2050:
case 1220:
case 2220:
case 2727:
case 636:
case 336:
case 3781:
case 2109:
case 1109:
case 3219:
case 1670:
case 2670:
case 2587:
case 1587:
case 2465:
case 4017:
case 2104:
case 371:
case 3474:
case 2392:
case 1893:
case 3214:
case 671:
case 3063:
case 828:
case 4043:
case 2769:
case 581:
case 2634:
case 2005:
case 2911:
case 1911:
case 1599:
case 1488:
case 3403:
case 990:
case 947:
case 435:
case 921:
case 434:
case 1122:
case 2122:
case 3320:
case 3973:
case 1764:
case 2639:
case 2319:
case 3500:
case 1201:
case 126:
case 298:
case 198:
case 2594:
case 1594:
case 55:
case 1144:
case 2144:
case 2869:
case 973:
case 3959:
case 2154:
case 2033:
case 3926:
case 1681:
case 3296:
case 3417:
case 3099:
case 1928:
case 3277:
case 3770:
case 3482:
case 133:
case 3128:
case 2000:
case 411:
case 3351:
case 2149:
case 1149:
case 3944:
case 740:
case 753:
case 1159:
case 3875:
case 3341:
case 2159:
case 966:
case 1126:
case 142:
case 2460:
case 3734:
case 65:
case 478:
case 4030:
case 2516:
case 323:
case 2827:
case 430:
case 3012:
case 1241:
case 3540:
case 3881:
case 452:
case 2251:
case 1251:
case 1021:
case 3550:
case 1563:
case 2055:
case 1225:
case 2225:
case 909:
case 2793:
case 1045:
case 1793:
case 3739:
case 681:
case 1396:
case 2396:
case 2995:
case 3453:
case 994:
case 2304:
case 1304:
case 296:
case 128:
case 580:
case 384:
case 2784:
case 1192:
case 2192:
case 1037:
case 2037:
case 385:
case 2015:
case 3413:
case 593:
case 684:
case 2524:
case 1831:
case 3222:
case 2546:
case 3052:
case 4038:
case 2468:
case 1468:
case 616:
case 3466:
case 2211:
case 1211:
case 2471:
case 3558:
case 1309:
case 1471:
case 94:
case 2789:
case 3548:
case 2008:
case 164:
case 826:
case 165:
case 1823:
case 3120:
case 414:
case 2502:
case 1119:
case 1502:
case 107:
case 4062:
case 2119:
case 2432:
case 1432:
case 3006:
case 1485:
case 2485:
case 3311:
case 3209:
case 1290:
case 3919:
case 2114:
case 1114:
case 2776:
case 1776:
case 2797:
case 638:
case 1872:
case 3457:
case 1920:
case 1373:
case 2373:
case 2920:
case 1759:
case 3811:
case 1433:
case 2433:
case 1503:
case 1749:
case 3588:
case 1822:
case 3499:
case 2586:
case 1586:
case 1323:
case 3035:
case 2873:
case 1873:
case 2372:
case 3170:
case 1372:
case 3494:
case 688:
case 3231:
case 4016:
case 2530:
case 1400:
case 3609:
case 124:
case 2754:
case 1754:
case 866:
case 913:
case 1744:
case 2744:
case 225:
case 125:
case 1579:
case 1611:
case 552:
case 1331:
case 3487:
case 2060:
case 1060:
case 3412:
case 3272:
case 335:
case 578:
case 1804:
case 1421:
case 809:
case 2455:
case 2809:
case 1445:
case 949:
case 268:
case 168:
case 1574:
case 1939:
case 3134:
case 3565:
case 3053:
case 1189:
case 2189:
case 3701:
case 3264:
case 3984:
case 1415:
case 4067:
case 2415:
case 1437:
case 3381:
case 2437:
case 2275:
case 676:
case 1327:
case 1625:
case 2327:
case 2625:
case 891:
case 3013:
case 659:
case 3452:
case 2877:
case 1641:
case 1877:
case 2896:
case 1896:
case 820:
case 2071:
case 90:
case 2184:
case 1792:
case 1184:
case 2792:
case 331:
case 1562:
case 3483:
case 1408:
case 4029:
case 2538:
case 1538:
case 4046:
case 2197:
case 3161:
case 121:
case 3825:
case 2032:
case 1032:
case 1176:
case 247:
case 2714:
case 310:
case 76:
case 2085:
case 1961:
case 2961:
case 3580:
case 3375:
case 792:
case 586:
case 2719:
case 2364:
case 290:
case 474:
case 4024:
case 3047:
case 1698:
case 2698:
case 1239:
case 416:
case 3370:
case 3923:
case 2172:
case 2601:
case 266:
case 3402:
case 824:
case 4052:
case 531:
case 3293:
case 4042:
case 3038:
case 3741:
case 559:
case 1819:
case 1547:
case 748:
case 2819:
case 2547:
case 484:
case 2123:
case 1123:
case 1234:
case 2234:
case 1491:
case 1080:
case 2080:
case 195:
case 194:
case 386:
case 868:
case 1513:
case 686:
case 3931:
case 3614:
case 209:
case 3334:
case 2131:
case 2448:
case 2777:
case 3062:
case 3619:
case 1410:
case 1458:
case 2458:
case 3339:
case 1566:
case 615:
case 2566:
case 1270:
case 2270:
case 2393:
case 1620:
case 3429:
case 2620:
case 2892:
case 3568:
case 701:
case 314:
case 3798:
case 510:
case 3659:
case 14:
case 2418:
case 2278:
case 3927:
case 611:
case 2440:
case 799:
case 722:
case 4094:
case 120:
case 1384:
case 704:
case 3079:
case 3297:
case 1981:
case 1628:
case 2628:
case 3276:
case 2704:
case 2389:
case 1389:
case 1065:
case 1553:
case 3181:
case 191:
case 2709:
case 2543:
case 928:
case 1127:
case 3644:
case 2826:
case 3175:
case 1859:
case 2859:
case 1582:
case 2535:
case 1535:
case 2164:
case 2849:
case 2405:
case 1517:
case 1405:
case 890:
case 481:
case 2088:
case 3828:
case 2773:
case 1773:
case 352:
case 678:
case 45:
case 3378:
case 1695:
case 2695:
case 3361:
case 1376:
case 1975:
case 2376:
case 4012:
case 1169:
case 965:
case 1838:
case 197:
case 297:
case 2838:
case 169:
case 419:
case 3305:
case 3607:
case 3732:
case 1908:
case 2908:
case 3525:
case 3836:
case 733:
case 579:
case 2757:
case 3541:
case 1183:
case 2478:
case 2747:
case 3551:
case 556:
case 2218:
case 22:
case 1020:
case 617:
case 3476:
case 317:
case 3497:
case 3216:
case 140:
case 3662:
case 841:
case 389:
case 2152:
case 3350:
case 33:
case 1713:
case 432:
case 1142:
case 901:
case 3340:
case 2142:
case 3484:
case 450:
case 4072:
case 106:
case 443:
case 63:
case 2001:
case 862:
case 1937:
case 2915:
case 2316:
case 1915:
case 1316:
case 2205:
case 1596:
case 4023:
case 2596:
case 2680:
case 1680:
case 1577:
case 2577:
case 2766:
case 1766:
case 89:
case 3092:
case 3771:
case 3115:
case 3137:
case 3952:
case 2862:
case 3598:
case 3942:
case 796:
case 582:
case 2879:
case 2324:
case 3155:
case 3603:
case 3145:
case 2688:
case 3590:
case 1291:
case 2291:
case 3267:
case 2504:
case 905:
case 922:
case 1187:
case 2187:
case 2743:
case 3630:
case 1439:
case 2439:
case 3358:
case 2112:
case 1509:
case 1112:
case 2509:
case 537:
case 1874:
case 2329:
case 1356:
case 999:
case 3865:
case 1346:
case 1945:
case 3511:
case 1470:
case 3679:
case 2782:
case 2194:
case 1028:
case 2210:
case 2258:
case 51:
case 1735:
case 1717:
case 3100:
case 1302:
case 2717:
case 1248:
case 2803:
case 3049:
case 2886:
case 3246:
case 3229:
case 3026:
case 2933:
case 1933:
case 2573:
case 3044:
case 1830:
case 2830:
case 3224:
case 47:
case 3994:
case 3674:
case 1900:
case 2900:
case 672:
case 2665:
case 2367:
case 3391:
case 2882:
case 2559:
case 1559:
case 3308:
case 3242:
case 1526:
case 853:
case 2383:
case 1383:
case 1549:
case 900:
case 2817:
case 1835:
case 3788:
case 2835:
case 637:
case 3022:
case 2703:
case 1786:
case 2786:
case 337:
case 451:
case 1905:
case 2306:
case 1011:
case 2011:
case 3469:
case 1660:
case 2660:
case 1475:
case 2237:
case 382:
case 1237:
case 2215:
case 1215:
case 108:
case 3105:
case 48:
case 2554:
case 2544:
case 1779:
case 572:
case 3682:
case 2090:
case 1090:
case 3635:
case 1481:
case 3337:
case 3916:
case 3315:
case 2950:
case 1950:
case 749:
case 1163:
case 1940:
case 1853:
case 162:
case 760:
case 3150:
case 2352:
case 3118:
case 2843:
case 1843:
case 3140:
case 3283:
case 806:
case 1774:
case 3206:
case 3595:
case 127:
case 3765:
case 227:
case 61:
case 1116:
case 2116:
case 1200:
case 4076:
case 2387:
case 2685:
case 1387:
case 3148:
case 1813:
case 356:
case 2707:
case 3110:
case 2632:
case 245:
case 3924:
case 656:
case 3321:
case 679:
case 244:
case 2098:
case 1124:
case 3355:
case 2124:
case 2233:
case 1233:
case 2866:
case 1866:
case 3871:
case 3647:
case 2592:
case 1592:
case 1948:
case 3096:
case 1762:
case 0:
case 3077:
case 2958:
case 929:
case 1738:
case 3885:
case 1245:
case 2245:
case 3832:
case 2255:
case 2025:
case 1025:
case 3423:
case 3736:
case 1514:
case 2514:
case 992:
case 2394:
case 3780:
case 303:
case 3472:
case 53:
case 3212:
case 2847:
case 2519:
case 1671:
case 3300:
case 2102:
case 1991:
case 3287:
case 3666:
case 1051:
case 2221:
case 3520:
case 1668:
case 454:
case 2668:
case 798:
case 2041:
case 1041:
case 603:
case 455:
case 3876:
case 3941:
case 3897:
case 1861:
case 2125:
case 1125:
case 3354:
case 280:
case 180:
case 3951:
case 3344:
case 782:
case 2067:
case 1878:
case 1002:
case 157:
case 1684:
case 2684:
case 988:
case 3506:
case 3295:
case 4071:
case 1328:
case 2328:
case 1438:
case 1508:
case 1141:
case 613:
case 3925:
case 3326:
case 3349:
case 737:
case 565:
case 3661:
case 2697:
case 934:
case 3010:
case 1676:
case 2676:
case 3228:
case 564:
case 1462:
case 2462:
case 4032:
case 71:
case 3048:
case 360:
case 1249:
case 2046:
case 1046:
case 3552:
case 3998:
case 1029:
case 2259:
case 2226:
case 3678:
case 1056:
case 1024:
case 2024:
case 881:
case 490:
case 2537:
case 1537:
case 2407:
case 2515:
case 1407:
case 3392:
case 2190:
case 1474:
case 2474:
case 2214:
case 3893:
case 3465:
case 2909:
case 976:
case 2063:
case 2555:
case 1063:
case 959:
case 1545:
case 2545:
case 3727:
case 756:
case 931:
case 963:
case 816:
case 2834:
case 1834:
case 1521:
case 2521:
case 3050:
case 2219:
case 60:
case 3990:
case 3587:
case 1016:
case 2016:
case 542:
case 2479:
case 1301:
case 3670:
case 2301:
case 2904:
case 236:
case 3512:
case 2693:
case 910:
case 3122:
case 2973:
case 626:
case 3594:
case 326:
case 2111:
case 3319:
case 3639:
case 3911:
case 218:
case 3599:
case 2292:
case 1292:
case 468:
case 3314:
case 3769:
case 3634:
case 2870:
case 870:
case 1922:
case 3488:
case 1403:
case 1533:
case 3000:
case 642:
case 333:
case 2094:
case 1128:
case 50:
case 1341:
case 1875:
case 342:
case 7:
case 3126:
case 1954:
case 2954:
case 717:
case 3864:
case 2351:
case 2944:
case 1944:
case 3154:
case 1627:
case 1926:
case 2627:
case 893:
case 2325:
case 1949:
case 2949:
case 1482:
case 1770:
case 1417:
case 2417:
case 3681:
case 1296:
case 1435:
case 1277:
case 2099:
case 2277:
case 3928:
case 3045:
case 3793:
case 3225:
case 281:
case 2453:
case 986:
case 3396:
case 874:
case 3377:
case 875:
case 1443:
case 1739:
case 2664:
case 2739:
case 2195:
case 1195:
case 3827:
case 914:
case 1012:
case 2734:
case 915:
case 1087:
case 3516:
case 73:
case 598:
case 2550:
case 1518:
case 1550:
case 2881:
case 2540:
case 3468:
case 3529:
case 836:
case 3556:
case 911:
case 513:
case 2052:
case 2222:
case 2992:
case 1992:
case 1672:
case 3789:
case 216:
case 4036:
case 1558:
case 3309:
case 473:
case 1390:
case 2390:
case 3192:
case 185:
case 3015:
case 1623:
case 3901:
case 3037:
case 2623:
case 3304:
case 328:
case 396:
case 871:
case 696:
case 2413:
case 2273:
case 409:
case 238:
case 3776:
case 2204:
case 3797:
case 772:
case 1591:
case 2457:
case 3872:
case 3920:
case 494:
case 2778:
case 2447:
case 758:
case 495:
case 3823:
case 2120:
case 3008:
case 364:
case 978:
case 1083:
case 560:
case 2311:
case 1311:
case 2006:
case 1006:
case 1631:
case 664:
case 1209:
case 2209:
case 3432:
case 3502:
case 307:
case 3119:
case 1914:
case 2914:
case 665:
case 1064:
case 2064:
case 3186:
case 2473:
case 2213:
case 3894:
case 648:
case 877:
case 1188:
case 3645:
case 1800:
case 1422:
case 9:
case 1903:
case 2903:
case 3988:
case 2069:
case 3271:
case 2986:
case 2385:
case 1986:
case 1687:
case 2266:
case 4095:
case 3411:
case 1612:
case 2332:
case 1368:
case 2368:
case 2694:
case 1694:
case 3179:
case 2974:
case 56:
case 1974:
case 854:
case 3232:
case 2409:
case 1371:
case 1409:
case 3600:
case 2371:
case 1845:
case 2539:
case 715:
case 1539:
case 3285:
case 855:
case 2979:
case 3081:
case 1699:
case 3490:
case 786:
case 1404:
case 2821:
case 2404:
case 1821:
case 1534:
case 2534:
case 1750:
case 27:
case 17:
case 2718:
case 3887:
case 1247:
case 2247:
case 1740:
case 529:
case 1257:
case 2027:
case 1027:
case 839:
case 1477:
case 3589:
case 1710:
case 1758:
case 469:
case 2758:
case 3842:
case 2282:
case 497:
case 1962:
case 399:
case 622:
case 440:
case 3584:
case 1606:
case 2606:
case 2907:
case 2031:
case 1360:
case 2360:
case 3162:
case 4020:
case 711:
case 3724:
case 3608:
case 500:
case 2683:
case 699:
case 2837:
case 322:
case 667:
case 2561:
case 3597:
case 3576:
case 3767:
case 2791:
case 1791:
case 143:
case 1072:
case 406:
case 2072:
case 250:
case 3138:
case 3441:
case 2652:
case 2642:
case 1642:
case 546:
case 3451:
case 287:
case 187:
case 958:
case 1808:
case 3382:
case 3335:
case 2023:
case 2253:
case 3317:
case 3615:
case 3702:
case 567:
case 444:
case 3420:
case 599:
case 2656:
case 1656:
case 3078:
case 600:
case 2891:
case 445:
case 1646:
case 1947:
case 2947:
case 300:
case 1185:
case 505:
case 3061:
case 2279:
case 522:
case 3330:
case 1132:
case 3658:
case 3610:
case 1419:
case 3386:
case 177:
case 3523:
case 1414:
case 2274:
case 3932:
case 3783:
case 2708:
case 3303:
case 3147:
case 3802:
case 3856:
case 3374:
case 3829:
case 2089:
case 1365:
case 1667:
case 2365:
case 1286:
case 2966:
case 87:
case 4025:
case 2848:
case 3752:
case 2203:
case 3288:
case 2858:
case 646:
case 155:
case 1168:
case 254:
case 1913:
case 4051:
case 3824:
case 3531:
case 734:
case 2230:
case 1230:
case 2602:
case 1171:
case 1602:
case 2715:
case 91:
case 3166:
case 3039:
case 2953:
case 1953:
case 251:
case 151:
case 1943:
case 2943:
case 2160:
case 1160:
case 763:
case 1755:
case 731:
case 2238:
case 2721:
case 759:
case 3787:
case 28:
case 1850:
case 1818:
case 139:
case 3153:
case 239:
case 408:
case 3712:
case 3605:
case 1840:
case 1581:
case 3280:
case 3143:
case 629:
case 1454:
case 1444:
case 2663:
case 1207:
case 2207:
case 3794:
case 2575:
case 887:
case 2700:
case 3117:
case 1700:
case 692:
case 3135:
case 3799:
case 427:
case 66:
case 3070:
case 2336:
case 832:
case 2935:
case 1935:
case 2616:
case 1616:
case 850:
case 112:
case 2426:
case 1426:
case 1459:
case 2459:
case 1733:
case 903:
case 1449:
case 3640:
case 1805:
case 3747:
case 3478:
case 1551:
case 3020:
case 3250:
case 1880:
case 1541:
case 1108:
case 422:
case 3106:
case 340:
case 2:
case 2019:
case 117:
case 62:
case 2497:
case 545:
case 1497:
case 1732:
case 1305:
case 1906:
case 2305:
case 2607:
case 2785:
case 3838:
case 369:
case 882:
case 2836:
case 669:
case 697:
case 3908:
case 2263:
case 1092:
case 2092:
case 1115:
case 97:
case 3596:
case 3577:
case 3680:
case 1598:
case 3862:
case 3363:
case 1942:
case 2768:
case 2952:
case 723:
case 3713:
case 3807:
case 2340:
case 189:
case 2638:
case 2318:
case 13:
case 23:
case 75:
case 3636:
case 3937:
case 3001:
case 3095:
case 2358:
case 2310:
case 1358:
case 1310:
case 3509:
case 2630:
case 1630:
case 3439:
case 2202:
case 1202:
case 3187:
case 1348:
case 2348:
case 1865:
case 2121:
case 3945:
case 879:
case 3329:
case 919:
case 508:
case 3688:
case 785:
case 2145:
case 1145:
case 3324:
case 1760:
case 1912:
case 1590:
case 2590:
case 2987:
case 2686:
case 2267:
case 1987:
case 3830:
case 1133:
case 2054:
case 2133:
case 1044:
case 2044:
case 3573:
case 987:
case 3900:
case 3665:
case 2391:
case 2994:
case 1994:
case 3199:
case 1674:
case 2100:
case 3717:
case 1100:
case 3735:
case 932:
case 3803:
case 401:
case 562:
case 2511:
case 3470:
case 1511:
case 2679:
case 3028:
case 1999:
case 2999:
case 1229:
case 2229:
case 2059:
case 2026:
case 541:
case 1256:
case 950:
case 3886:
case 1049:
case 3522:
case 2246:
case 1464:
case 308:
case 3730:
case 2464:
case 780:
case 1653:
case 3237:
case 282:
case 977:
case 1073:
case 3554:
case 608:
case 2788:
case 3549:
case 2252:
case 817:
case 3559:
case 2242:
case 1242:
case 3011:
case 3905:
case 1528:
case 1469:
case 3843:
case 46:
case 3208:
case 1283:
case 2963:
case 3853:
case 1150:
case 1118:
case 2150:
case 3352:
case 627:
case 2765:
case 1765:
case 955:
case 3116:
case 889:
case 1595:
case 4070:
case 2206:
case 3090:
case 69:
case 1617:
case 1315:
case 2635:
case 775:
case 1337:
case 429:
case 2004:
case 2682:
case 3779:
case 2860:
case 1860:
case 3940:
case 492:
case 1427:
case 3950:
case 3918:
case 3866:
case 1946:
case 1647:
case 2345:
case 1871:
case 98:
case 3098:
case 771:
case 2956:
case 3124:
case 1355:
case 3762:
case 2096:
case 1096:
case 3910:
case 3958:
case 1299:
case 2077:
case 2299:
case 3592:
case 1868:
case 400:
case 156:
case 3813:
case 1294:
case 3632:
case 3707:
case 3312:
case 644:
case 3200:
case 2148:
case 4061:
case 2501:
case 3387:
case 3685:
case 553:
case 4078:
case 736:
case 3156:
case 951:
case 3519:
case 3847:
case 3671:
case 1967:
case 912:
case 2967:
case 1472:
case 2472:
case 3394:
case 2780:
case 1212:
case 2212:
case 3051:
case 3668:
case 1520:
case 2520:
case 1832:
case 3025:
case 1333:
case 3255:
case 858:
case 1613:
case 1885:
case 2885:
case 1736:
case 3167:
case 1191:
case 1423:
case 1231:
case 1609:
case 2609:
case 3530:
case 3873:
case 1494:
case 625:
case 2494:
case 2170:
case 602:
case 325:
case 302:
case 3754:
case 40:
case 324:
case 4018:
case 188:
case 3503:
case 591:
case 3433:
case 3749:
case 3726:
case 1811:
case 993:
case 3759:
case 2604:
case 1604:
case 1082:
case 1499:
case 3690:
case 3822:
case 1035:
case 3970:
case 3323:
case 1017:
case 3586:
case 668:
case 1993:
case 2673:
case 1053:
case 2134:
case 4005:
case 2053:
case 368:
case 886:
case 2043:
case 2795:
case 2412:
case 1412:
case 1139:
case 755:
case 498:
case 1272:
case 1487:
case 3331:
case 754:
case 2487:
case 3060:
case 134:
case 3421:
case 235:
case 135:
case 2622:
case 1622:
case 2890:
case 1890:
case 566:
case 751:
case 3877:
case 2452:
case 1452:
case 163:
case 231:
case 131:
case 1269:
case 3071:
case 2989:
case 1989:
case 2066:
case 1066:
case 413:
case 3792:
case 1381:
case 2701:
case 2264:
case 2984:
case 1264:
case 159:
case 259:
case 573:
case 971:
case 2013:
case 3327:
case 3625:
case 3364:
case 449:
case 2851:
case 1696:
case 3281:
case 2696:
case 595:
case 1375:
case 1677:
case 1976:
case 2677:
case 2976:
case 2580:
case 1580:
case 3698:
case 2057:
case 509:
case 3978:
case 2227:
case 1720:
case 1047:
case 647:
case 878:
case 621:
case 830:
case 2483:
case 3538:
case 3408:
case 4010:
case 1406:
case 2536:
case 210:
case 852:
case 110:
case 3197:
case 321:
case 1161:
case 347:
case 3032:
case 3176:
case 673:
case 2741:
case 3557:
case 3491:
case 4015:
case 3080:
case 2820:
case 1820:
case 2692:
case 1692:
case 3234:
case 2972:
case 888:
case 2532:
case 1402:
case 2402:
case 2370:
case 2585:
case 1585:
case 1038:
case 2339:
case 1571:
case 3410:
case 3458:
case 3566:
case 3777:
case 3448:
case 3131:
case 834:
case 3796:
case 1062:
case 407:
case 114:
case 1446:
case 923:
case 2798:
case 465:
case 3393:
case 521:
case 4008:
case 464:
case 3892:
case 2568:
case 2429:
case 394:
case 590:
case 3513:
case 395:
case 609:
case 1424:
case 2424:
case 77:
case 1334:
case 309:
case 2334:
case 2614:
case 2931:
case 981:
case 2007:
case 3709:
case 1181:
case 2181:
case 3389:
case 3065:
case 3553:
case 859:
case 719:
case 1644:
case 984:
case 1654:
case 2654:
case 2895:
case 691:
case 442:
case 3440:
case 2649:
case 3450:
case 1927:
case 3278:
case 1297:
case 111:
case 2079:
case 2297:
case 1079:
case 502:
case 1276:
case 3628:
case 3704:
case 2276:
case 2560:
case 524:
case 461:
case 2790:
case 433:
case 1378:
case 2378:
case 152:
case 252:
case 3773:
case 750:
case 3169:
case 732:
case 2964:
case 2284:
case 1964:
case 3695:
case 3854:
case 1030:
case 178:
case 1969:
case 2969:
case 1289:
case 3849:
case 1086:
case 3535:
case 787:
case 3826:
case 3582:
case 2711:
case 1175:
case 1828:
case 938:
case 2003:
case 1003:
case 970:
case 3088:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747954801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,];
var gg_b = "1747954801/";

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
