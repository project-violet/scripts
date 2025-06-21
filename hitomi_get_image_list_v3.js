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
case 2062:
case 3114:
case 3266:
case 505:
case 3766:
case 2709:
case 746:
case 1860:
case 122:
case 3092:
case 2368:
case 2796:
case 3012:
case 2164:
case 3852:
case 2225:
case 1454:
case 1933:
case 1172:
case 108:
case 2128:
case 158:
case 1221:
case 3545:
case 4089:
case 1120:
case 539:
case 3966:
case 3058:
case 1367:
case 3818:
case 3592:
case 2132:
case 1081:
case 2909:
case 3679:
case 2916:
case 411:
case 82:
case 3579:
case 2868:
case 3430:
case 2996:
case 1574:
case 555:
case 419:
case 87:
case 3301:
case 1733:
case 2562:
case 1883:
case 1245:
case 3521:
case 1148:
case 497:
case 274:
case 3349:
case 2750:
case 1212:
case 2757:
case 3621:
case 1745:
case 2389:
case 792:
case 383:
case 2151:
case 1461:
case 2257:
case 1712:
case 758:
case 3774:
case 3633:
case 3533:
case 2004:
case 768:
case 3981:
case 3407:
case 1779:
case 821:
case 879:
case 3849:
case 672:
case 3495:
case 2482:
case 1566:
case 2950:
case 1992:
case 294:
case 772:
case 3033:
case 3415:
case 2604:
case 2889:
case 58:
case 3823:
case 2739:
case 3974:
case 2741:
case 3875:
case 891:
case 1155:
case 2147:
case 215:
case 2241:
case 899:
case 3806:
case 396:
case 2211:
case 1700:
case 2869:
case 894:
case 2291:
case 3630:
case 2711:
case 3637:
case 1586:
case 1101:
case 545:
case 1926:
case 507:
case 3761:
case 1942:
case 3412:
case 815:
case 148:
case 3261:
case 3819:
case 3160:
case 2753:
case 2369:
case 3458:
case 824:
case 99:
case 1907:
case 1481:
case 1554:
case 567:
case 874:
case 1654:
case 3183:
case 3030:
case 279:
case 3399:
case 3961:
case 1726:
case 221:
case 656:
case 3827:
case 3820:
case 1715:
case 666:
case 1314:
case 2105:
case 3319:
case 1226:
case 756:
case 3078:
case 2953:
case 1795:
case 1215:
case 1394:
case 3355:
case 2665:
case 610:
case 3986:
case 999:
case 1937:
case 1930:
case 2565:
case 3336:
case 414:
case 3254:
case 166:
case 1759:
case 2946:
case 4069:
case 2922:
case 3848:
case 3695:
case 3007:
case 2777:
case 2582:
case 2770:
case 2135:
case 2238:
case 113:
case 2171:
case 2888:
case 3515:
case 2270:
case 534:
case 3626:
case 2738:
case 3786:
case 3433:
case 1278:
case 2246:
case 1730:
case 748:
case 1737:
case 921:
case 3600:
case 1778:
case 2722:
case 3507:
case 2746:
case 1230:
case 929:
case 971:
case 1363:
case 2184:
case 3348:
case 106:
case 2970:
case 2977:
case 2388:
case 584:
case 2938:
case 1661:
case 1123:
case 826:
case 3757:
case 3750:
case 1835:
case 1016:
case 2521:
case 228:
case 1856:
case 1453:
case 1934:
case 1025:
case 3939:
case 3257:
case 3102:
case 1096:
case 202:
case 3389:
case 278:
case 1871:
case 283:
case 2533:
case 654:
case 3941:
case 1411:
case 4001:
case 2774:
case 137:
case 754:
case 2331:
case 1491:
case 460:
case 2400:
case 2981:
case 930:
case 1356:
case 3950:
case 1985:
case 3957:
case 1573:
case 1673:
case 1734:
case 1884:
case 3604:
case 1371:
case 2823:
case 233:
case 1234:
case 2033:
case 2415:
case 3504:
case 1962:
case 262:
case 2180:
case 3465:
case 2281:
case 1596:
case 1616:
case 2021:
case 980:
case 187:
case 2781:
case 1516:
case 3147:
case 1625:
case 3209:
case 3273:
case 482:
case 2114:
case 687:
case 1305:
case 1704:
case 3709:
case 2318:
case 2194:
case 1204:
case 1470:
case 1477:
case 3725:
case 3324:
case 649:
case 928:
case 1343:
case 3716:
case 104:
case 2852:
case 983:
case 1890:
case 1541:
case 3128:
case 978:
case 2045:
case 902:
case 2801:
case 2012:
case 1641:
case 3164:
case 2512:
case 1805:
case 637:
case 952:
case 2645:
case 962:
case 2612:
case 1041:
case 154:
case 1557:
case 3585:
case 1550:
case 3909:
case 280:
case 2966:
case 4049:
case 2692:
case 164:
case 1650:
case 3685:
case 3925:
case 512:
case 1310:
case 2478:
case 3824:
case 2679:
case 1446:
case 3916:
case 1843:
case 1829:
case 998:
case 4075:
case 453:
case 933:
case 2430:
case 536:
case 4072:
case 1893:
case 880:
case 3565:
case 2336:
case 3665:
case 2754:
case 2986:
case 1340:
case 1347:
case 135:
case 3946:
case 75:
case 2254:
case 593:
case 3777:
case 1508:
case 161:
case 1091:
case 151:
case 3156:
case 1409:
case 2695:
case 3277:
case 1802:
case 1011:
case 2642:
case 169:
case 2626:
case 3738:
case 1851:
case 2526:
case 3171:
case 2615:
case 2855:
case 3222:
case 2026:
case 2954:
case 644:
case 2015:
case 1393:
case 2836:
case 3746:
case 1691:
case 2286:
case 440:
case 1313:
case 2600:
case 70:
case 1376:
case 1553:
case 3970:
case 60:
case 4027:
case 6:
case 2144:
case 523:
case 898:
case 1:
case 3869:
case 2806:
case 2403:
case 833:
case 2479:
case 2678:
case 1646:
case 1077:
case 1828:
case 1965:
case 2872:
case 2537:
case 2530:
case 1864:
case 3711:
case 3462:
case 3291:
case 443:
case 570:
case 2899:
case 709:
case 2327:
case 2320:
case 685:
case 399:
case 2761:
case 520:
case 2167:
case 1982:
case 3908:
case 3753:
case 785:
case 1332:
case 2059:
case 2261:
case 3485:
case 1450:
case 144:
case 391:
case 2306:
case 2559:
case 883:
case 751:
case 802:
case 3369:
case 3991:
case 2659:
case 2458:
case 1364:
case 4055:
case 828:
case 1765:
case 769:
case 651:
case 759:
case 635:
case 3208:
case 2827:
case 1282:
case 3105:
case 2399:
case 2037:
case 379:
case 1439:
case 735:
case 1570:
case 371:
case 2319:
case 1046:
case 1677:
case 1022:
case 2078:
case 15:
case 3569:
case 2606:
case 1846:
case 1443:
case 3913:
case 1822:
case 2287:
case 375:
case 3740:
case 1032:
case 2830:
case 3141:
case 739:
case 2787:
case 2780:
case 1429:
case 1628:
case 3240:
case 1988:
case 665:
case 3902:
case 4015:
case 3139:
case 1405:
case 3951:
case 2498:
case 2699:
case 655:
case 4042:
case 2963:
case 13:
case 765:
case 2619:
case 803:
case 755:
case 1370:
case 3293:
case 2859:
case 853:
case 2019:
case 3947:
case 2378:
case 2401:
case 2980:
case 3213:
case 2099:
case 2337:
case 1490:
case 789:
case 2174:
case 681:
case 546:
case 2620:
case 2072:
case 3276:
case 3751:
case 2006:
case 3150:
case 1185:
case 1870:
case 1288:
case 832:
case 18:
case 3069:
case 3251:
case 1632:
case 850:
case 3865:
case 1593:
case 3928:
case 1311:
case 68:
case 2475:
case 860:
case 1513:
case 572:
case 4078:
case 78:
case 508:
case 940:
case 1613:
case 2300:
case 2307:
case 2449:
case 1047:
case 1040:
case 3732:
case 476:
case 1484:
case 181:
case 2548:
case 1651:
case 1502:
case 2055:
case 1602:
case 3489:
case 1551:
case 2914:
case 189:
case 63:
case 3728:
case 3365:
case 3088:
case 2655:
case 1811:
case 3764:
case 1769:
case 3228:
case 2807:
case 3116:
case 1891:
case 1540:
case 155:
case 1456:
case 3109:
case 558:
case 131:
case 2794:
case 2395:
case 3382:
case 1013:
case 243:
case 139:
case 2294:
case 1104:
case 2744:
case 932:
case 1029:
case 3284:
case 3971:
case 462:
case 657:
case 916:
case 3935:
case 3024:
case 1289:
case 3784:
case 4021:
case 1350:
case 3385:
case 1357:
case 3068:
case 2858:
case 1517:
case 2303:
case 2379:
case 2601:
case 953:
case 2552:
case 1841:
case 2098:
case 2186:
case 3362:
case 1697:
case 963:
case 1690:
case 433:
case 2501:
case 2001:
case 645:
case 3235:
case 2812:
case 3138:
case 903:
case 1090:
case 2698:
case 3177:
case 745:
case 3735:
case 1857:
case 3334:
case 2518:
case 1850:
case 2892:
case 184:
case 1010:
case 2618:
case 31:
case 250:
case 3568:
case 428:
case 707:
case 2406:
case 3624:
case 2879:
case 2358:
case 3668:
case 3862:
case 478:
case 483:
case 2472:
case 1428:
case 1341:
case 402:
case 1656:
case 107:
case 2960:
case 311:
case 1373:
case 2821:
case 1309:
case 3304:
case 319:
case 1571:
case 3997:
case 2833:
case 684:
case 3729:
case 2455:
case 2023:
case 145:
case 3917:
case 1447:
case 1440:
case 480:
case 1768:
case 1084:
case 818:
case 784:
case 216:
case 2649:
case 4092:
case 2321:
case 1451:
case 1402:
case 3804:
case 4045:
case 2161:
case 3929:
case 2983:
case 203:
case 2675:
case 2333:
case 1896:
case 1493:
case 282:
case 840:
case 634:
case 167:
case 4003:
case 950:
case 1825:
case 2631:
case 4079:
case 3290:
case 2531:
case 3191:
case 157:
case 1924:
case 1035:
case 3475:
case 2928:
case 479:
case 2865:
case 504:
case 1133:
case 3307:
case 3300:
case 471:
case 429:
case 1121:
case 3994:
case 3648:
case 2732:
case 975:
case 3895:
case 1227:
case 1220:
case 1080:
case 1087:
case 2489:
case 2688:
case 1444:
case 3914:
case 3842:
case 54:
case 3826:
case 3423:
case 2232:
case 2588:
case 3815:
case 1727:
case 1720:
case 2088:
case 2365:
case 2196:
case 1680:
case 1206:
case 2764:
case 1580:
case 1587:
case 3636:
case 499:
case 914:
case 2125:
case 3048:
case 491:
case 2228:
case 3794:
case 3214:
case 2382:
case 3166:
case 2109:
case 2173:
case 3294:
case 3714:
case 1219:
case 3326:
case 3342:
case 1236:
case 2468:
case 2669:
case 3606:
case 1255:
case 3878:
case 3020:
case 1736:
case 3672:
case 2247:
case 225:
case 1483:
case 1886:
case 4065:
case 1354:
case 3787:
case 2951:
case 1514:
case 3699:
case 3498:
case 2902:
case 2139:
case 1948:
case 3418:
case 3963:
case 340:
case 3519:
case 417:
case 295:
case 3378:
case 1179:
case 2713:
case 3099:
case 3330:
case 3980:
case 811:
case 42:
case 1014:
case 587:
case 1145:
case 318:
case 1112:
case 3527:
case 786:
case 549:
case 2069:
case 1748:
case 2776:
case 2251:
case 1467:
case 1192:
case 214:
case 2157:
case 2202:
case 3763:
case 4034:
case 170:
case 1195:
case 3967:
case 1298:
case 1142:
case 219:
case 1126:
case 353:
case 544:
case 927:
case 2705:
case 363:
case 1798:
case 895:
case 2089:
case 2243:
case 1901:
case 773:
case 3455:
case 1480:
case 1487:
case 788:
case 3023:
case 1044:
case 814:
case 1952:
case 2997:
case 332:
case 2743:
case 723:
case 0:
case 2917:
case 2229:
case 1463:
case 1866:
case 3549:
case 3649:
case 3448:
case 3321:
case 2153:
case 997:
case 2488:
case 2689:
case 1644:
case 3161:
case 56:
case 875:
case 2905:
case 3260:
case 2589:
case 3675:
case 2111:
case 793:
case 382:
case 4062:
case 738:
case 3983:
case 3575:
case 693:
case 1100:
case 91:
case 638:
case 2290:
case 1252:
case 3420:
case 2284:
case 2971:
case 193:
case 1723:
case 2784:
case 2834:
case 2385:
case 1749:
case 1667:
case 1560:
case 2024:
case 1731:
case 3303:
case 494:
case 300:
case 1178:
case 2122:
case 2146:
case 1275:
case 911:
case 2362:
case 3098:
case 1231:
case 690:
case 3501:
case 1374:
case 1775:
case 1130:
case 173:
case 3052:
case 4004:
case 3499:
case 2771:
case 3845:
case 188:
case 2235:
case 3598:
case 2138:
case 123:
case 3419:
case 21:
case 350:
case 2756:
case 2170:
case 360:
case 3518:
case 2334:
case 1494:
case 620:
case 1067:
case 1931:
case 2568:
case 1159:
case 1381:
case 2624:
case 3472:
case 720:
case 1683:
case 1583:
case 585:
case 3080:
case 1826:
case 1423:
case 1842:
case 3444:
case 1914:
case 2551:
case 2651:
case 3999:
case 2502:
case 1815:
case 1994:
case 2576:
case 205:
case 2040:
case 2047:
case 1648:
case 2484:
case 1895:
case 386:
case 2613:
case 1300:
case 247:
case 1431:
case 2391:
case 4022:
case 2969:
case 2593:
case 2311:
case 3861:
case 2093:
case 2104:
case 1315:
case 3920:
case 3799:
case 239:
case 1342:
case 3219:
case 143:
case 2308:
case 2435:
case 1395:
case 1166:
case 2456:
case 3719:
case 3063:
case 2547:
case 255:
case 1048:
case 336:
case 2640:
case 2076:
case 2647:
case 740:
case 444:
case 1800:
case 3272:
case 1536:
case 3687:
case 312:
case 3206:
case 2811:
case 834:
case 3580:
case 1636:
case 3587:
case 1619:
case 2134:
case 2377:
case 140:
case 485:
case 1699:
case 2338:
case 409:
case 867:
case 857:
case 3614:
case 2628:
case 1020:
case 3483:
case 3886:
case 2664:
case 1830:
case 989:
case 1837:
case 743:
case 3755:
case 1572:
case 1181:
case 1506:
case 905:
case 3158:
case 981:
case 1280:
case 3255:
case 1878:
case 2443:
case 2846:
case 2822:
case 28:
case 2632:
case 965:
case 3748:
case 3192:
case 1006:
case 2288:
case 2877:
case 1763:
case 118:
case 2028:
case 3145:
case 3248:
case 845:
case 3112:
case 2064:
case 1527:
case 1520:
case 1452:
case 1099:
case 1337:
case 807:
case 469:
case 459:
case 1401:
case 1987:
case 1980:
case 3014:
case 2417:
case 931:
case 4091:
case 2346:
case 3179:
case 1859:
case 3094:
case 750:
case 760:
case 2440:
case 2447:
case 2316:
case 3480:
case 2224:
case 650:
case 3044:
case 1023:
case 1783:
case 660:
case 3952:
case 4041:
case 132:
case 88:
case 1833:
case 153:
case 2671:
case 4039:
case 591:
case 2373:
case 2635:
case 370:
case 2556:
case 1821:
case 2535:
case 2656:
case 3718:
case 1031:
case 1960:
case 2816:
case 3201:
case 2924:
case 257:
case 267:
case 3107:
case 3252:
case 1631:
case 2968:
case 2493:
case 182:
case 1575:
case 1983:
case 1161:
case 1623:
case 3644:
case 2451:
case 1260:
case 3998:
case 529:
case 3866:
case 2584:
case 1549:
case 2476:
case 1767:
case 3918:
case 521:
case 579:
case 2684:
case 4050:
case 4057:
case 2690:
case 2005:
case 831:
case 2697:
case 3231:
case 1652:
case 1186:
case 1501:
case 3374:
case 2841:
case 3130:
case 3137:
case 3775:
case 1018:
case 907:
case 3881:
case 441:
case 3178:
case 3667:
case 3749:
case 234:
case 2350:
case 487:
case 1244:
case 3560:
case 3567:
case 2043:
case 2029:
case 393:
case 782:
case 3083:
case 3723:
case 855:
case 338:
case 753:
case 1472:
case 3683:
case 2341:
case 805:
case 2464:
case 881:
case 3583:
case 517:
case 763:
case 3060:
case 1358:
case 3067:
case 1803:
case 4025:
case 2643:
case 1419:
case 2010:
case 160:
case 2857:
case 1518:
case 1892:
case 632:
case 1499:
case 373:
case 2605:
case 2090:
case 2097:
case 847:
case 1845:
case 616:
case 1001:
case 1944:
case 3414:
case 2505:
case 1598:
case 732:
case 583:
case 3134:
case 502:
case 2594:
case 3370:
case 3988:
case 2614:
case 528:
case 3338:
case 2514:
case 3405:
case 2354:
case 2755:
case 1993:
case 3528:
case 2736:
case 2886:
case 2483:
case 1247:
case 3564:
case 1240:
case 1424:
case 2255:
case 3846:
case 1913:
case 3443:
case 2236:
case 114:
case 2192:
case 1157:
case 1150:
case 598:
case 3532:
case 456:
case 38:
case 2467:
case 1776:
case 1251:
case 3632:
case 936:
case 2112:
case 3788:
case 1702:
case 4061:
case 2248:
case 1793:
case 2955:
case 413:
case 2014:
case 3490:
case 2854:
case 820:
case 2094:
case 195:
case 3410:
case 3346:
case 3322:
case 3651:
case 1232:
case 2361:
case 2720:
case 3502:
case 2727:
case 3602:
case 2087:
case 695:
case 3551:
case 305:
case 2919:
case 2220:
case 3808:
case 2227:
case 3484:
case 1882:
case 2563:
case 2663:
case 795:
case 381:
case 888:
case 3513:
case 3969:
case 3391:
case 3613:
case 2972:
case 1928:
case 1865:
case 1964:
case 3693:
case 4086:
case 3471:
case 2927:
case 2799:
case 580:
case 3104:
case 3456:
case 3853:
case 331:
case 1932:
case 625:
case 775:
case 3308:
case 1125:
case 893:
case 2272:
case 1116:
case 2063:
case 2706:
case 355:
case 1264:
case 3540:
case 3891:
case 3269:
case 2587:
case 2580:
case 2680:
case 3002:
case 2206:
case 1764:
case 2775:
case 3597:
case 3590:
case 127:
case 1122:
case 970:
case 2178:
case 2275:
case 3510:
case 3517:
case 3610:
case 2223:
case 2560:
case 1024:
case 1935:
case 1956:
case 446:
case 2660:
case 3432:
case 3350:
case 3357:
case 1068:
case 1834:
case 2749:
case 2723:
case 238:
case 3789:
case 1284:
case 293:
case 2249:
case 3464:
case 2583:
case 3529:
case 3629:
case 2874:
case 3428:
case 719:
case 3341:
case 2683:
case 2159:
case 1568:
case 1624:
case 3543:
case 619:
case 197:
case 2931:
case 2060:
case 384:
case 1334:
case 3857:
case 1885:
case 223:
case 1984:
case 1756:
case 1235:
case 886:
case 3505:
case 2414:
case 3097:
case 3339:
case 3090:
case 1771:
case 3447:
case 345:
case 3084:
case 3724:
case 4081:
case 3325:
case 458:
case 2952:
case 993:
case 596:
case 3224:
case 938:
case 2044:
case 61:
case 3671:
case 2218:
case 492:
case 1705:
case 2142:
case 119:
case 2126:
case 3571:
case 3182:
case 2366:
case 1108:
case 3535:
case 2718:
case 2298:
case 1205:
case 797:
case 111:
case 3635:
case 367:
case 2107:
case 2100:
case 1297:
case 2252:
case 1191:
case 1943:
case 3413:
case 3816:
case 3035:
case 357:
case 2201:
case 576:
case 1929:
case 973:
case 1790:
case 2752:
case 1217:
case 2701:
case 2544:
case 1488:
case 1689:
case 727:
case 677:
case 3476:
case 2918:
case 3809:
case 1153:
case 3684:
case 290:
case 777:
case 627:
case 1113:
case 2779:
case 423:
case 337:
case 3491:
case 3262:
case 2703:
case 3009:
case 1193:
case 488:
case 1941:
case 2203:
case 124:
case 2292:
case 3285:
case 1250:
case 1939:
case 3096:
case 1102:
case 3871:
case 1389:
case 2344:
case 174:
case 1757:
case 2212:
case 3785:
case 922:
case 4067:
case 3384:
case 3453:
case 2245:
case 3025:
case 3934:
case 2148:
case 1241:
case 3525:
case 246:
case 2979:
case 3616:
case 848:
case 387:
case 3625:
case 1140:
case 493:
case 3696:
case 958:
case 2136:
case 3371:
case 1604:
case 1889:
case 1739:
case 349:
case 2912:
case 3234:
case 1504:
case 2945:
case 3356:
case 3509:
case 1239:
case 1950:
case 341:
case 2992:
case 194:
case 3734:
case 2566:
case 1482:
case 3890:
case 1128:
case 208:
case 2172:
case 2933:
case 272:
case 3329:
case 806:
case 1164:
case 2383:
case 3810:
case 490:
case 1716:
case 3057:
case 1368:
case 1709:
case 1634:
case 2867:
case 715:
case 3477:
case 2921:
case 3204:
case 2199:
case 3438:
case 1062:
case 615:
case 2674:
case 674:
case 724:
case 1562:
case 3039:
case 3397:
case 3317:
case 3446:
case 3557:
case 1585:
case 354:
case 1909:
case 543:
case 1685:
case 946:
case 364:
case 2367:
case 856:
case 268:
case 866:
case 3802:
case 1270:
case 1277:
case 1404:
case 1738:
case 3011:
case 359:
case 4014:
case 2466:
case 2863:
case 1777:
case 1238:
case 3091:
case 3473:
case 1156:
case 3409:
case 4094:
case 335:
case 2759:
case 266:
case 2978:
case 858:
case 3813:
case 1946:
case 771:
case 729:
case 3053:
case 868:
case 2259:
case 2937:
case 2061:
case 1565:
case 3893:
case 721:
case 779:
case 2380:
case 550:
case 3351:
case 822:
case 1388:
case 1065:
case 560:
case 2561:
case 1970:
case 3553:
case 19:
case 1746:
case 910:
case 2237:
case 2230:
case 301:
case 3691:
case 3847:
case 3840:
case 3591:
case 117:
case 3313:
case 791:
case 1246:
case 2278:
case 2880:
case 2737:
case 2730:
case 2175:
case 3511:
case 691:
case 956:
case 4063:
case 3982:
case 344:
case 191:
case 3457:
case 2894:
case 2926:
case 199:
case 2942:
case 617:
case 516:
case 3828:
case 2207:
case 2686:
case 2586:
case 1462:
case 69:
case 2101:
case 3:
case 3546:
case 1110:
case 1869:
case 1791:
case 79:
case 3077:
case 1708:
case 36:
case 2118:
case 2394:
case 129:
case 2242:
case 171:
case 3022:
case 3046:
case 3677:
case 3282:
case 1208:
case 2086:
case 2314:
case 179:
case 2742:
case 2654:
case 4080:
case 3765:
case 3441:
case 3168:
case 2900:
case 2481:
case 3265:
case 62:
case 77:
case 1369:
case 906:
case 1991:
case 1801:
case 2641:
case 1012:
case 798:
case 2890:
case 308:
case 1045:
case 733:
case 3172:
case 3581:
case 1658:
case 3106:
case 2050:
case 2057:
case 1092:
case 2817:
case 1558:
case 633:
case 1003:
case 1318:
case 652:
case 937:
case 1079:
case 2204:
case 3921:
case 1766:
case 2470:
case 130:
case 662:
case 4035:
case 3867:
case 1114:
case 2639:
case 801:
case 2305:
case 1398:
case 3074:
case 778:
case 628:
case 949:
case 861:
case 2397:
case 2390:
case 1352:
case 3733:
case 1301:
case 851:
case 3486:
case 941:
case 407:
case 869:
case 2446:
case 1478:
case 1579:
case 1503:
case 602:
case 3721:
case 180:
case 445:
case 264:
case 2657:
case 3367:
case 1058:
case 1592:
case 987:
case 3081:
case 2904:
case 3221:
case 2041:
case 1612:
case 2805:
case 1898:
case 3127:
case 3120:
case 1645:
case 368:
case 2073:
case 94:
case 525:
case 237:
case 4010:
case 2262:
case 3958:
case 3703:
case 1375:
case 86:
case 575:
case 3279:
case 3203:
case 2871:
case 178:
case 183:
case 1323:
case 3461:
case 3712:
case 3292:
case 2096:
case 2188:
case 2453:
case 1521:
case 3148:
case 2934:
case 2025:
case 3792:
case 1349:
case 2016:
case 2835:
case 2384:
case 1781:
case 2516:
case 2625:
case 4043:
case 3979:
case 2616:
case 434:
case 2596:
case 3136:
case 630:
case 844:
case 3258:
case 2962:
case 3155:
case 2696:
case 595:
case 2234:
case 80:
case 198:
case 8:
case 514:
case 2371:
case 4005:
case 133:
case 3844:
case 1426:
case 1823:
case 2734:
case 2673:
case 1495:
case 2609:
case 2335:
case 2356:
case 2573:
case 241:
case 3992:
case 465:
case 4076:
case 2450:
case 1261:
case 2457:
case 244:
case 1492:
case 3894:
case 935:
case 1167:
case 519:
case 2982:
case 1761:
case 1412:
case 3926:
case 3814:
case 1899:
case 3054:
case 1445:
case 1630:
case 1637:
case 2038:
case 2864:
case 439:
case 1872:
case 2828:
case 3207:
case 3152:
case 1537:
case 4093:
case 1403:
case 1806:
case 1678:
case 1578:
case 2522:
case 2546:
case 4013:
case 3226:
case 3242:
case 25:
case 2677:
case 2046:
case 2022:
case 2577:
case 3215:
case 26:
case 642:
case 3118:
case 2832:
case 3742:
case 1399:
case 2282:
case 3715:
case 1820:
case 742:
case 3086:
case 3314:
case 2328:
case 3554:
case 3654:
case 2765:
case 4047:
case 405:
case 3481:
case 481:
case 1526:
case 2851:
case 726:
case 1615:
case 1626:
case 251:
case 2473:
case 1000:
case 776:
case 9:
case 2409:
case 3466:
case 356:
case 48:
case 2347:
case 3759:
case 366:
case 527:
case 944:
case 2416:
case 4064:
case 3387:
case 1986:
case 854:
case 864:
case 3061:
case 3937:
case 3930:
case 2893:
case 142:
case 2302:
case 696:
case 3561:
case 3123:
case 51:
case 3661:
case 2351:
case 3363:
case 3149:
case 306:
case 2376:
case 285:
case 3131:
case 96:
case 2313:
case 95:
case 3230:
case 3237:
case 1786:
case 1836:
case 2393:
case 3278:
case 3887:
case 1026:
case 3730:
case 209:
case 1042:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750467601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,];
var gg_b = "1750467601/";

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
