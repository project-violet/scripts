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
case 1081:
case 2101:
case 2687:
case 2578:
case 3260:
case 1993:
case 210:
case 1586:
case 2120:
case 2116:
case 2992:
case 1958:
case 308:
case 1460:
case 774:
case 245:
case 605:
case 2316:
case 225:
case 2251:
case 2857:
case 2451:
case 4020:
case 2320:
case 4001:
case 2936:
case 2779:
case 1248:
case 3175:
case 2322:
case 3856:
case 4094:
case 2284:
case 956:
case 1937:
case 1686:
case 3054:
case 3262:
case 2194:
case 277:
case 2309:
case 2678:
case 3123:
case 2463:
case 2771:
case 3727:
case 2263:
case 496:
case 2028:
case 1713:
case 881:
case 1117:
case 2941:
case 1123:
case 1727:
case 1418:
case 1347:
case 464:
case 1218:
case 925:
case 1880:
case 945:
case 2661:
case 3347:
case 2131:
case 807:
case 930:
case 2768:
case 3880:
case 57:
case 213:
case 266:
case 1925:
case 1650:
case 799:
case 3743:
case 2704:
case 1973:
case 3147:
case 2906:
case 233:
case 3735:
case 2742:
case 1743:
case 482:
case 884:
case 3552:
case 291:
case 2911:
case 2972:
case 2553:
case 1735:
case 3285:
case 2740:
case 2669:
case 31:
case 2174:
case 1550:
case 2698:
case 1285:
case 2970:
case 2146:
case 2653:
case 712:
case 1485:
case 3652:
case 82:
case 3550:
case 3907:
case 1395:
case 1882:
case 732:
case 2346:
case 1195:
case 256:
case 2055:
case 3195:
case 4039:
case 2374:
case 2883:
case 2039:
case 783:
case 1479:
case 2987:
case 3658:
case 3693:
case 10:
case 2205:
case 2541:
case 3434:
case 3234:
case 2692:
case 3888:
case 1226:
case 2802:
case 1426:
case 3410:
case 3537:
case 1095:
case 3226:
case 1888:
case 2636:
case 678:
case 2876:
case 2166:
case 479:
case 1410:
case 1803:
case 1537:
case 3095:
case 870:
case 3637:
case 3471:
case 3412:
case 2821:
case 3167:
case 3212:
case 3271:
case 1759:
case 327:
case 2213:
case 2413:
case 282:
case 347:
case 2800:
case 1167:
case 515:
case 1877:
case 1412:
case 886:
case 817:
case 1637:
case 2031:
case 1763:
case 1271:
case 433:
case 623:
case 2536:
case 147:
case 3047:
case 413:
case 1815:
case 837:
case 1367:
case 1593:
case 3784:
case 1047:
case 3367:
case 2641:
case 2524:
case 3815:
case 1558:
case 2748:
case 3593:
case 2328:
case 3625:
case 3189:
case 2435:
case 1354:
case 578:
case 494:
case 3404:
case 3204:
case 2519:
case 2443:
case 892:
case 4028:
case 3354:
case 296:
case 1625:
case 2009:
case 2896:
case 477:
case 2961:
case 1268:
case 2022:
case 3017:
case 2606:
case 2094:
case 1468:
case 1299:
case 769:
case 1950:
case 3023:
case 1499:
case 2570:
case 3389:
case 3468:
case 3845:
case 2611:
case 2128:
case 3833:
case 3299:
case 3499:
case 3950:
case 3507:
case 828:
case 1607:
case 2001:
case 1573:
case 848:
case 2969:
case 118:
case 2506:
case 640:
case 3607:
case 3573:
case 3181:
case 2016:
case 3952:
case 2511:
case 2572:
case 445:
case 982:
case 615:
case 349:
case 3440:
case 3525:
case 2814:
case 129:
case 410:
case 903:
case 149:
case 1525:
case 2114:
case 2057:
case 2926:
case 3197:
case 971:
case 165:
case 3584:
case 685:
case 912:
case 1197:
case 889:
case 3758:
case 480:
case 2736:
case 2979:
case 668:
case 1881:
case 3559:
case 1563:
case 2934:
case 1287:
case 2749:
case 1905:
case 2130:
case 2660:
case 69:
case 2314:
case 4014:
case 932:
case 1559:
case 3881:
case 850:
case 1663:
case 1145:
case 459:
case 730:
case 2038:
case 725:
case 3663:
case 745:
case 2662:
case 2828:
case 3478:
case 2132:
case 3145:
case 2560:
case 3333:
case 4032:
case 1056:
case 1927:
case 274:
case 1065:
case 2332:
case 3889:
case 3345:
case 2648:
case 1913:
case 1684:
case 3927:
case 2912:
case 2196:
case 1333:
case 3065:
case 3913:
case 1889:
case 297:
case 1725:
case 2968:
case 756:
case 836:
case 2450:
case 483:
case 467:
case 2300:
case 4000:
case 804:
case 2100:
case 1080:
case 212:
case 326:
case 3773:
case 3080:
case 3935:
case 126:
case 2706:
case 1261:
case 1773:
case 1461:
case 779:
case 1177:
case 585:
case 863:
case 3943:
case 3707:
case 2518:
case 2144:
case 4029:
case 1082:
case 2102:
case 2329:
case 3188:
case 1707:
case 1103:
case 299:
case 2083:
case 2866:
case 2991:
case 2008:
case 457:
case 4076:
case 2252:
case 2064:
case 1303:
case 1498:
case 1298:
case 2452:
case 766:
case 713:
case 1469:
case 3453:
case 1388:
case 1269:
case 3303:
case 2344:
case 1453:
case 3469:
case 558:
case 4044:
case 2302:
case 3269:
case 3003:
case 195:
case 1527:
case 1895:
case 3088:
case 1249:
case 3436:
case 3236:
case 3527:
case 2571:
case 2512:
case 1003:
case 2610:
case 1436:
case 3249:
case 3513:
case 2076:
case 3951:
case 1236:
case 976:
case 890:
case 3224:
case 3492:
case 2634:
case 2874:
case 499:
case 2839:
case 3382:
case 703:
case 3605:
case 1492:
case 2458:
case 1292:
case 782:
case 18:
case 66:
case 2960:
case 2846:
case 2029:
case 3380:
case 324:
case 3505:
case 344:
case 3490:
case 3959:
case 2534:
case 1015:
case 980:
case 3290:
case 1380:
case 65:
case 471:
case 144:
case 2962:
case 3786:
case 1613:
case 1180:
case 622:
case 2021:
case 834:
case 3613:
case 1786:
case 2778:
case 2237:
case 2510:
case 1984:
case 497:
case 2273:
case 1033:
case 2473:
case 341:
case 3823:
case 56:
case 2138:
case 3472:
case 2668:
case 2822:
case 276:
case 3272:
case 3211:
case 3033:
case 121:
case 1817:
case 1472:
case 1411:
case 2032:
case 1272:
case 3750:
case 751:
case 1643:
case 1156:
case 1165:
case 3643:
case 2604:
case 259:
case 3156:
case 2540:
case 3635:
case 2425:
case 2642:
case 2338:
case 3165:
case 1535:
case 2753:
case 902:
case 1419:
case 2542:
case 1097:
case 2691:
case 2769:
case 2640:
case 1752:
case 3219:
case 2504:
case 269:
case 967:
case 2798:
case 3419:
case 2568:
case 3270:
case 796:
case 2207:
case 2599:
case 2407:
case 1470:
case 2357:
case 2985:
case 4057:
case 1383:
case 1164:
case 1874:
case 1634:
case 501:
case 3960:
case 1493:
case 3029:
case 727:
case 1839:
case 1293:
case 2292:
case 3634:
case 2424:
case 3874:
case 3164:
case 1258:
case 2224:
case 2492:
case 550:
case 2605:
case 921:
case 1029:
case 3493:
case 3679:
case 941:
case 3839:
case 2895:
case 3183:
case 3364:
case 2182:
case 2951:
case 1626:
case 1787:
case 1610:
case 2003:
case 1512:
case 1364:
case 1571:
case 653:
case 2088:
case 1108:
case 1526:
case 102:
case 2180:
case 70:
case 367:
case 2613:
case 2627:
case 775:
case 589:
case 1778:
case 302:
case 183:
case 663:
case 2786:
case 167:
case 1671:
case 2077:
case 3021:
case 1237:
case 3962:
case 2963:
case 1962:
case 244:
case 3579:
case 2380:
case 604:
case 224:
case 2241:
case 2290:
case 2490:
case 2847:
case 2441:
case 3534:
case 3604:
case 3096:
case 359:
case 2156:
case 2643:
case 3425:
case 995:
case 3642:
case 2875:
case 3540:
case 3809:
case 159:
case 2750:
case 3918:
case 1642:
case 1425:
case 1809:
case 1761:
case 2033:
case 1273:
case 176:
case 650:
case 1822:
case 241:
case 221:
case 3273:
case 601:
case 376:
case 2272:
case 4056:
case 1032:
case 3138:
case 3357:
case 3985:
case 660:
case 504:
case 1599:
case 1801:
case 868:
case 3568:
case 2270:
case 536:
case 1357:
case 3820:
case 924:
case 3407:
case 89:
case 1753:
case 3640:
case 516:
case 1157:
case 587:
case 3542:
case 563:
case 2535:
case 885:
case 2419:
case 2543:
case 3504:
case 369:
case 1640:
case 3014:
case 1769:
case 2097:
case 1542:
case 169:
case 2752:
case 288:
case 3562:
case 2397:
case 3749:
case 2287:
case 2487:
case 2881:
case 1562:
case 1314:
case 3979:
case 1130:
case 2905:
case 1749:
case 3934:
case 1114:
case 265:
case 3910:
case 1724:
case 3926:
case 3114:
case 534:
case 2584:
case 946:
case 3792:
case 1910:
case 926:
case 631:
case 2913:
case 1648:
case 1332:
case 2551:
case 2065:
case 2333:
case 1196:
case 2684:
case 1971:
case 4045:
case 3332:
case 708:
case 3560:
case 2478:
case 3396:
case 2659:
case 672:
case 1828:
case 1711:
case 1772:
case 2080:
case 634:
case 424:
case 1121:
case 171:
case 822:
case 3904:
case 444:
case 3711:
case 1706:
case 226:
case 1942:
case 4015:
case 246:
case 312:
case 2315:
case 2461:
case 2261:
case 332:
case 3300:
case 5:
case 1999:
case 2115:
case 988:
case 1250:
case 1300:
case 132:
case 614:
case 73:
case 1585:
case 3450:
case 3250:
case 1452:
case 3344:
case 4088:
case 2298:
case 2498:
case 3719:
case 3302:
case 1376:
case 690:
case 2469:
case 3685:
case 3129:
case 3452:
case 3064:
case 2253:
case 1129:
case 2453:
case 399:
case 48:
case 3940:
case 3176:
case 3866:
case 3991:
case 2103:
case 3518:
case 2188:
case 1866:
case 1176:
case 1940:
case 724:
case 3876:
case 1802:
case 1649:
case 2226:
case 2095:
case 41:
case 1166:
case 1636:
case 3649:
case 3844:
case 1155:
case 2803:
case 354:
case 1039:
case 2279:
case 1366:
case 3405:
case 3590:
case 581:
case 3624:
case 1987:
case 2434:
case 1829:
case 1046:
case 154:
case 1205:
case 1405:
case 20:
case 3366:
case 275:
case 43:
case 1624:
case 3987:
case 1541:
case 2815:
case 3690:
case 2784:
case 3592:
case 3748:
case 2986:
case 2593:
case 4067:
case 1690:
case 1748:
case 164:
case 1227:
case 2759:
case 1821:
case 1427:
case 509:
case 1413:
case 662:
case 1549:
case 1762:
case 1213:
case 3536:
case 303:
case 2763:
case 938:
case 2637:
case 2471:
case 3427:
case 3800:
case 1536:
case 607:
case 3762:
case 2468:
case 2845:
case 3672:
case 54:
case 3128:
case 1606:
case 1094:
case 52:
case 1022:
case 3570:
case 2268:
case 2950:
case 2507:
case 2833:
case 361:
case 3094:
case 1611:
case 2154:
case 1570:
case 1718:
case 2023:
case 2075:
case 396:
case 2354:
case 1328:
case 3009:
case 4054:
case 3961:
case 1243:
case 3235:
case 3328:
case 2442:
case 196:
case 3519:
case 3443:
case 1896:
case 2404:
case 87:
case 1619:
case 1814:
case 507:
case 805:
case 927:
case 609:
case 947:
case 408:
case 2381:
case 2291:
case 2525:
case 4081:
case 2440:
case 3785:
case 2491:
case 351:
case 3016:
case 1001:
case 1998:
case 3830:
case 3572:
case 1020:
case 3953:
case 218:
case 1969:
case 3001:
case 3998:
case 1670:
case 1953:
case 1572:
case 3506:
case 300:
case 145:
case 1451:
case 815:
case 586:
case 1949:
case 517:
case 3779:
case 1734:
case 1301:
case 325:
case 130:
case 820:
case 3116:
case 840:
case 639:
case 438:
case 3992:
case 208:
case 2586:
case 2993:
case 110:
case 3726:
case 648:
case 1578:
case 2958:
case 1924:
case 755:
case 3710:
case 1992:
case 1116:
case 3120:
case 3578:
case 394:
case 1309:
case 673:
case 2686:
case 1263:
case 3259:
case 3990:
case 3941:
case 3122:
case 2117:
case 194:
case 2713:
case 2054:
case 2262:
case 3194:
case 1028:
case 3771:
case 1259:
case 2727:
case 2123:
case 3394:
case 3109:
case 692:
case 570:
case 2448:
case 2865:
case 2317:
case 4017:
case 3484:
case 2856:
case 3284:
case 1394:
case 788:
case 2937:
case 1484:
case 1284:
case 2552:
case 1331:
case 2650:
case 1598:
case 3972:
case 191:
case 3704:
case 2743:
case 528:
case 1553:
case 3906:
case 548:
case 1972:
case 333:
case 519:
case 3661:
case 2347:
case 2418:
case 366:
case 2880:
case 823:
case 843:
case 1131:
case 1799:
case 2925:
case 686:
case 166:
case 356:
case 3339:
case 2882:
case 3561:
case 3374:
case 40:
case 2195:
case 1339:
case 1066:
case 156:
case 592:
case 1883:
case 1374:
case 3919:
case 878:
case 3653:
case 1791:
case 1669:
case 1139:
case 1740:
case 726:
case 2907:
case 1864:
case 2485:
case 573:
case 4095:
case 2285:
case 3698:
case 3174:
case 1070:
case 3620:
case 1616:
case 95:
case 2523:
case 3187:
case 1620:
case 1594:
case 1783:
case 1601:
case 2007:
case 1966:
case 502:
case 1840:
case 1297:
case 1955:
case 669:
case 3019:
case 3840:
case 2214:
case 3966:
case 3497:
case 3891:
case 3509:
case 865:
case 3297:
case 2575:
case 567:
case 942:
case 3387:
case 1019:
case 389:
case 3764:
case 49:
case 1804:
case 4086:
case 2496:
case 2967:
case 1378:
case 1842:
case 720:
case 2025:
case 2386:
case 740:
case 3804:
case 2843:
case 557:
case 2675:
case 855:
case 3378:
case 3842:
case 3609:
case 2623:
case 3433:
case 96:
case 101:
case 3501:
case 3233:
case 3694:
case 350:
case 3006:
case 2780:
case 3868:
case 3445:
case 2432:
case 998:
case 1233:
case 1501:
case 301:
case 1245:
case 3072:
case 1694:
case 676:
case 150:
case 2186:
case 4050:
case 667:
case 116:
case 163:
case 683:
case 1631:
case 1161:
case 1812:
case 2037:
case 1277:
case 602:
case 242:
case 2813:
case 363:
case 2400:
case 387:
case 3812:
case 3631:
case 3477:
case 2421:
case 2595:
case 336:
case 3539:
case 580:
case 1546:
case 1090:
case 2756:
case 3574:
case 3415:
case 136:
case 3546:
case 304:
case 3090:
case 1215:
case 1574:
case 3674:
case 1092:
case 3834:
case 2805:
case 2429:
case 3169:
case 1153:
case 2152:
case 3092:
case 1674:
case 2981:
case 3024:
case 3757:
case 723:
case 1879:
case 743:
case 1639:
case 2093:
case 1810:
case 1403:
case 2352:
case 1036:
case 1488:
case 3049:
case 3826:
case 1288:
case 3398:
case 559:
case 3810:
case 3531:
case 3203:
case 3369:
case 1353:
case 2202:
case 3036:
case 1049:
case 1124:
case 88:
case 2158:
case 3901:
case 1916:
case 1192:
case 3069:
case 1053:
case 3920:
case 2464:
case 958:
case 3124:
case 3916:
case 2052:
case 1901:
case 2193:
case 1920:
case 3053:
case 3714:
case 1069:
case 2797:
case 3349:
case 3885:
case 4093:
case 2283:
case 3392:
case 498:
case 3324:
case 1655:
case 3149:
case 3482:
case 3730:
case 2393:
case 574:
case 1392:
case 2358:
case 1324:
case 1730:
case 1282:
case 3666:
case 2745:
case 1566:
case 334:
case 3280:
case 2137:
case 1555:
case 3341:
case 2667:
case 985:
case 1280:
case 1818:
case 1390:
case 3061:
case 3922:
case 824:
case 442:
case 99:
case 422:
case 2923:
case 1141:
case 844:
case 4037:
case 1922:
case 314:
case 1796:
case 2337:
case 968:
case 3190:
case 2715:
case 1931:
case 331:
case 193:
case 3848:
case 3372:
case 1306:
case 2125:
case 4073:
case 3265:
case 599:
case 131:
case 3931:
case 1256:
case 1311:
case 1848:
case 1372:
case 393:
case 1265:
case 2947:
case 172:
case 3078:
case 77:
case 821:
case 1862:
case 1172:
case 4025:
case 2581:
case 2173:
case 1078:
case 372:
case 2238:
case 2325:
case 258:
case 2086:
case 3111:
case 3172:
case 2438:
case 3628:
case 29:
case 1528:
case 1702:
case 3939:
case 1170:
case 1:
case 1744:
case 1319:
case 3702:
case 1939:
case 3528:
case 1776:
case 3860:
case 2788:
case 3946:
case 3170:
case 3319:
case 3370:
case 512:
case 3119:
case 571:
case 2307:
case 1729:
case 2457:
case 2851:
case 2995:
case 923:
case 109:
case 3819:
case 582:
case 1908:
case 3360:
case 2697:
case 309:
case 3983:
case 215:
case 3040:
case 3091:
case 2982:
case 1614:
case 503:
case 3908:
case 4051:
case 235:
case 3964:
case 47:
case 3755:
case 1630:
case 1532:
case 405:
case 2533:
case 2201:
case 2807:
case 1755:
case 2420:
case 3630:
case 240:
case 3160:
case 2545:
case 220:
case 1766:
case 2220:
case 1417:
case 1632:
case 1872:
case 1811:
case 1217:
case 661:
case 1423:
case 2159:
case 3811:
case 3348:
case 3632:
case 2422:
case 554:
case 3417:
case 2494:
case 3530:
case 1068:
case 3223:
case 2384:
case 2163:
case 2633:
case 2597:
case 2825:
case 2209:
case 4063:
case 3148:
case 3362:
case 3514:
case 3475:
case 1004:
case 978:
case 2980:
case 1475:
case 1362:
case 3696:
case 1318:
case 1841:
case 1890:
case 1447:
case 500:
case 1529:
case 2615:
case 551:
case 3890:
case 920:
case 940:
case 2789:
case 1938:
case 3529:
case 2503:
case 1012:
case 3544:
case 3621:
case 2677:
case 2837:
case 3600:
case 2588:
case 243:
case 362:
case 1576:
case 3502:
case 603:
case 2956:
case 1118:
case 162:
case 682:
case 76:
case 2965:
case 1600:
case 2754:
case 2013:
case 3576:
case 307:
case 278:
case 1836:
case 3602:
case 1676:
case 3849:
case 1010:
case 3295:
case 3644:
case 3521:
case 3495:
case 1602:
case 3836:
case 1385:
case 596:
case 1644:
case 83:
case 654:
case 1185:
case 14:
case 2446:
case 3079:
case 81:
case 2858:
case 2439:
case 3185:
case 3629:
case 32:
case 2893:
case 2274:
case 1034:
case 3892:
case 3824:
case 2474:
case 561:
case 2515:
case 2466:
case 2997:
case 656:
case 1379:
case 2455:
case 3716:
case 1683:
case 1701:
case 2580:
case 3379:
case 1716:
case 3334:
case 4005:
case 3869:
case 1930:
case 1085:
case 1326:
case 80:
case 3134:
case 3853:
case 594:
case 1179:
case 3326:
case 3085:
case 1664:
case 679:
case 2852:
case 478:
case 1134:
case 3371:
case 691:
case 4013:
case 2775:
case 510:
case 4027:
case 3709:
case 337:
case 423:
case 1312:
case 443:
case 2850:
case 3932:
case 137:
case 633:
case 3018:
case 1861:
case 1171:
case 1583:
case 545:
case 1467:
case 1996:
case 117:
case 1794:
case 186:
case 1508:
case 1018:
case 2127:
case 3171:
case 3112:
case 3861:
case 317:
case 2717:
case 3508:
case 3722:
case 2680:
case 4043:
case 1454:
case 2335:
case 1062:
case 2059:
case 3199:
case 4035:
case 2343:
case 1878:
case 1168:
case 1638:
case 3254:
case 1304:
case 2063:
case 2915:
case 3048:
case 392:
case 1142:
case 1489:
case 3900:
case 2977:
case 3921:
case 1104:
case 1048:
case 3142:
case 192:
case 1557:
case 556:
case 1921:
case 2143:
case 3104:
case 3399:
case 2656:
case 119:
case 2903:
case 1774:
case 440:
case 3944:
case 838:
case 829:
case 758:
case 3902:
case 1976:
case 849:
case 630:
case 319:
case 645:
case 1944:
case 566:
case 1746:
case 513:
case 27:
case 3140:
case 2051:
case 1902:
case 435:
case 2795:
case 3887:
case 3481:
case 3281:
case 339:
case 3340:
case 415:
case 328:
case 3391:
case 533:
case 348:
case 1929:
case 818:
case 1887:
case 1281:
case 128:
case 3929:
case 148:
case 2326:
case 2085:
case 1105:
case 734:
case 3852:
case 854:
case 706:
case 2869:
case 2134:
case 2664:
case 2310:
case 1266:
case 4034:
case 3682:
case 2720:
case 270:
case 2608:
case 3305:
case 1466:
case 1255:
case 2683:
case 4079:
case 2334:
case 1455:
case 714:
case 2914:
case 3466:
case 3997:
case 1305:
case 1580:
case 2126:
case 3455:
case 992:
case 2716:
case 2996:
case 2467:
case 2171:
case 2861:
case 3723:
case 790:
case 2508:
case 3717:
case 919:
case 286:
case 2794:
case 3582:
case 3113:
case 1723:
case 1582:
case 462:
case 2932:
case 3945:
case 508:
case 928:
case 2312:
case 2564:
case 2371:
case 948:
case 1933:
case 4071:
case 2709:
case 939:
case 3775:
case 3135:
case 2368:
case 2142:
case 53:
case 2289:
case 2104:
case 1084:
case 3656:
case 3143:
case 4068:
case 970:
case 1665:
case 2557:
case 2900:
case 1135:
case 7:
case 1656:
case 3084:
case 1143:
case 3977:
case 2921:
case 1228:
case 3886:
case 2254:
case 2454:
case 1343:
case 3915:
case 1059:
case 273:
case 51:
case 3428:
case 2342:
case 1915:
case 1063:
case 2199:
case 239:
case 3795:
case 937:
case 793:
case 248:
case 2340:
case 608:
case 228:
case 2391:
case 917:
case 2774:
case 219:
case 37:
case 2140:
case 2976:
case 3051:
case 2739:
case 1988:
case 711:
case 105:
case 1051:
case 772:
case 17:
case 3988:
case 2746:
case 1565:
case 3401:
case 3807:
case 984:
case 3533:
case 1216:
case 2532:
case 320:
case 3420:
case 2630:
case 2160:
case 2870:
case 1807:
case 335:
case 1220:
case 419:
case 120:
case 618:
case 1420:
case 428:
case 629:
case 649:
case 907:
case 1697:
case 2091:
case 439:
case 4060:
case 825:
case 3697:
case 2614:
case 1982:
case 1209:
case 1825:
case 3980:
case 1597:
case 760:
case 1184:
case 1363:
case 473:
case 3359:
case 2696:
case 2148:
case 2362:
case 2514:
case 3597:
case 1043:
case 952:
case 4062:
case 3184:
case 3222:
case 3494:
case 2872:
case 2162:
case 2632:
case 1159:
case 3873:
case 3384:
case 3163:
case 3633:
case 2423:
case 492:
case 1494:
case 1645:
case 1422:
case 2806:
case 1633:
case 1163:
case 1384:
case 1873:
case 877:
case 1767:
case 575:
case 866:
case 1677:
case 2071:
case 2012:
case 1231:
case 437:
case 1503:
case 3754:
case 627:
case 123:
case 2576:
case 207:
case 909:
case 2118:
case 529:
case 3503:
case 2502:
case 538:
case 2247:
case 2447:
case 2890:
case 2318:
case 284:
case 518:
case 891:
case 4018:
case 3789:
case 417:
case 833:
case 2938:
case 1789:
case 3239:
case 60:
case 22:
case 1246:
case 3439:
case 981:
case 2629:
case 2824:
case 1858:
case 3515:
case 3274:
case 3446:
case 1893:
case 2079:
case 763:
case 3005:
case 1515:
case 470:
case 1274:
case 2676:
case 178:
case 1781:
case 1603:
case 2010:
case 856:
case 252:
case 2385:
case 378:
case 704:
case 3781:
case 2644:
case 857:
case 3358:
case 1483:
case 555:
case 993:
case 2136:
case 2666:
case 737:
case 1208:
case 3567:
case 2392:
case 4092:
case 2282:
case 3393:
case 3408:
case 3208:
case 2149:
case 2482:
case 4024:
case 2192:
case 3264:
case 1158:
case 911:
case 3193:
case 2714:
case 453:
case 4036:
case 3158:
case 717:
case 2336:
case 1917:
case 588:
case 2141:
case 3050:
case 1923:
case 2190:
case 2994:
case 770:
case 3917:
case 1337:
case 1050:
case 416:
case 463:
case 1733:
case 1137:
case 234:
case 1975:
case 2280:
case 2732:
case 3745:
case 2480:
case 802:
case 3667:
case 3777:
case 211:
case 1859:
case 3581:
case 3863:
case 3325:
case 1654:
case 358:
case 3438:
case 272:
case 719:
case 1777:
case 990:
case 1863:
case 1581:
case 1438:
case 158:
case 3654:
case 1373:
case 739:
case 728:
case 1689:
case 1125:
case 748:
case 655:
case 4072:
case 231:
case 2456:
case 2848:
case 2372:
case 2311:
case 3125:
case 3689:
case 3457:
case 1589:
case 3851:
case 773:
case 869:
case 906:
case 1307:
case 3589:
case 546:
case 526:
case 2729:
case 2370:
case 4070:
case 3307:
case 934:
case 2119:
case 2170:
case 2946:
case 2528:
case 4019:
case 1554:
case 368:
case 19:
case 3703:
case 2319:
case 3107:
case 2744:
case 3554:
case 489:
case 1681:
case 2974:
case 1703:
case 2087:
case 880:
case 3414:
case 3214:
case 2509:
case 2764:
case 2955:
case 963:
case 2387:
case 1575:
case 1214:
case 2019:
case 1782:
case 1230:
case 2070:
case 1523:
case 3007:
case 2616:
case 904:
case 524:
case 2594:
case 3430:
case 3782:
case 2620:
case 3230:
case 3517:
case 544:
case 1007:
case 3523:
case 2601:
case 3073:
case 621:
case 1623:
case 1780:
case 2011:
case 493:
case 2233:
case 1073:
case 709:
case 2622:
case 2868:
case 2445:
case 2178:
case 3432:
case 1186:
case 2006:
case 250:
case 2694:
case 2245:
case 1967:
case 595:
case 3843:
case 2804:
case 3675:
case 3835:
case 1843:
case 3967:
case 472:
case 3296:
case 411:
case 1835:
case 1675:
case 2546:
case 1765:
case 644:
case 2928:
case 1954:
case 752:
case 832:
case 1756:
case 2041:
case 3765:
case 3756:
case 2574:
case 3647:
case 2361:
case 1150:
case 960:
case 3813:
case 3400:
case 322:
case 2738:
case 2277:
case 3221:
case 3595:
case 1350:
case 2871:
case 3827:
case 2631:
case 3421:
case 3989:
case 1400:
case 74:
case 142:
case 122:
case 72:
case 871:
case 3350:
case 3037:
case 1421:
case 812:
case 1352:
case 4069:
case 2403:
case 2810:
case 3244:
case 1476:
case 2288:
case 899:
case 2369:
case 3202:
case 253:
case 1276:
case 4053:
case 695:
case 3352:
case 1444:
case 2049:
case 1402:
case 1058:
case 3152:
case 3981:
case 2153:
case 762:
case 68:
case 1429:
case 2757:
case 901:
case 950:
case 521:
case 2674:
case 1981:
case 541:
case 3547:
case 2834:
case 3429:
case 1093:
case 2639:
case 2169:
case 36:
case 707:
case 3229:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744084801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,];
var gg_b = "1744084801/";

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
