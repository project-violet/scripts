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
case 2288:
case 737:
case 1712:
case 1050:
case 3828:
case 2499:
case 3589:
case 1687:
case 780:
case 2120:
case 3046:
case 3854:
case 1614:
case 58:
case 975:
case 697:
case 69:
case 274:
case 605:
case 3625:
case 3575:
case 587:
case 1431:
case 1227:
case 4032:
case 400:
case 1562:
case 3352:
case 3007:
case 2628:
case 1661:
case 3279:
case 3953:
case 2752:
case 1970:
case 4054:
case 3334:
case 33:
case 1786:
case 1025:
case 1478:
case 694:
case 3158:
case 2426:
case 260:
case 2632:
case 3061:
case 2850:
case 1607:
case 189:
case 788:
case 3205:
case 3124:
case 3729:
case 2548:
case 2329:
case 3249:
case 1940:
case 946:
case 591:
case 2393:
case 584:
case 3545:
case 1599:
case 3014:
case 408:
case 2992:
case 1777:
case 3087:
case 538:
case 4015:
case 3975:
case 721:
case 2187:
case 2294:
case 813:
case 1620:
case 1570:
case 1341:
case 719:
case 1962:
case 118:
case 3268:
case 343:
case 1881:
case 545:
case 3233:
case 1128:
case 1735:
case 1867:
case 2024:
case 657:
case 662:
case 286:
case 2143:
case 2161:
case 1923:
case 1371:
case 2818:
case 2948:
case 110:
case 1132:
case 3482:
case 1801:
case 3413:
case 1366:
case 1655:
case 3815:
case 3290:
case 425:
case 3945:
case 743:
case 3236:
case 1824:
case 3891:
case 654:
case 2067:
case 1200:
case 321:
case 453:
case 106:
case 2470:
case 1469:
case 849:
case 3909:
case 1639:
case 2931:
case 1858:
case 2146:
case 766:
case 2043:
case 722:
case 2061:
case 1610:
case 3850:
case 360:
case 774:
case 1028:
case 1475:
case 2334:
case 1303:
case 1916:
case 4025:
case 2509:
case 2937:
case 1846:
case 564:
case 3734:
case 831:
case 37:
case 2158:
case 983:
case 1974:
case 3139:
case 2014:
case 661:
case 1377:
case 2545:
case 2793:
case 803:
case 2956:
case 2729:
case 169:
case 2697:
case 3251:
case 280:
case 3329:
case 2832:
case 2101:
case 2285:
case 3423:
case 626:
case 567:
case 2073:
case 116:
case 1982:
case 2828:
case 777:
case 309:
case 3499:
case 2589:
case 2167:
case 77:
case 3396:
case 100:
case 1032:
case 2279:
case 3010:
case 2953:
case 374:
case 288:
case 1944:
case 234:
case 760:
case 1887:
case 3592:
case 2482:
case 2413:
case 2290:
case 2257:
case 1624:
case 827:
case 1574:
case 1766:
case 3107:
case 2945:
case 786:
case 1722:
case 3818:
case 1242:
case 1839:
case 3081:
case 2444:
case 2618:
case 948:
case 3931:
case 406:
case 3067:
case 2891:
case 1855:
case 1601:
case 1516:
case 2909:
case 1284:
case 3470:
case 2537:
case 4018:
case 418:
case 1221:
case 3569:
case 3187:
case 1359:
case 3294:
case 243:
case 1763:
case 2268:
case 1741:
case 3001:
case 3265:
case 1667:
case 386:
case 1204:
case 1738:
case 3176:
case 938:
case 3224:
case 2344:
case 1291:
case 3800:
case 181:
case 365:
case 991:
case 194:
case 1111:
case 2108:
case 546:
case 2770:
case 3642:
case 2033:
case 1004:
case 1952:
case 3258:
case 4080:
case 689:
case 2313:
case 599:
case 2906:
case 1021:
case 1519:
case 3094:
case 3713:
case 1072:
case 2842:
case 2983:
case 3149:
case 2535:
case 2151:
case 3684:
case 2600:
case 461:
case 3880:
case 3522:
case 2804:
case 1694:
case 3621:
case 3340:
case 2220:
case 895:
case 426:
case 2374:
case 1017:
case 80:
case 987:
case 3774:
case 3179:
case 19:
case 575:
case 105:
case 2903:
case 3702:
case 373:
case 1934:
case 807:
case 2986:
case 233:
case 2821:
case 3281:
case 1477:
case 2512:
case 3190:
case 1389:
case 2207:
case 3493:
case 3938:
case 3895:
case 1232:
case 2079:
case 2611:
case 610:
case 976:
case 3864:
case 302:
case 3326:
case 2246:
case 3698:
case 951:
case 2664:
case 2547:
case 2959:
case 3941:
case 24:
case 1403:
case 2434:
case 1651:
case 3963:
case 3811:
case 329:
case 1805:
case 3362:
case 841:
case 729:
case 2586:
case 2452:
case 2287:
case 823:
case 2165:
case 1879:
case 1731:
case 1688:
case 3323:
case 2243:
case 702:
case 3971:
case 3660:
case 2005:
case 2723:
case 1228:
case 1406:
case 1885:
case 2276:
case 162:
case 855:
case 3399:
case 1345:
case 3430:
case 3133:
case 4084:
case 3374:
case 1993:
case 2267:
case 1438:
case 2566:
case 301:
case 96:
case 126:
case 1392:
case 3419:
case 2522:
case 2672:
case 3740:
case 616:
case 2340:
case 2571:
case 3220:
case 2185:
case 785:
case 1894:
case 2604:
case 3872:
case 842:
case 3680:
case 2281:
case 2179:
case 967:
case 2702:
case 3903:
case 273:
case 3316:
case 3986:
case 405:
case 2716:
case 333:
case 2642:
case 1080:
case 3770:
case 1753:
case 2258:
case 733:
case 3559:
case 2563:
case 8:
case 3817:
case 1657:
case 3255:
case 3344:
case 978:
case 693:
case 2744:
case 3884:
case 3151:
case 583:
case 385:
case 964:
case 3906:
case 3313:
case 4072:
case 669:
case 2094:
case 3382:
case 1218:
case 3068:
case 3842:
case 814:
case 3860:
case 3586:
case 540:
case 1709:
case 2827:
case 3452:
case 1121:
case 1685:
case 3503:
case 1745:
case 2966:
case 3799:
case 747:
case 2008:
case 3627:
case 3577:
case 1225:
case 1593:
case 1888:
case 3243:
case 1679:
case 3723:
case 2922:
case 625:
case 1142:
case 3935:
case 936:
case 202:
case 2429:
case 2157:
case 420:
case 3207:
case 1789:
case 347:
case 2941:
case 3273:
case 1250:
case 2811:
case 3695:
case 3434:
case 2136:
case 1378:
case 1596:
case 1117:
case 81:
case 2362:
case 3085:
case 2698:
case 2326:
case 3246:
case 3547:
case 454:
case 1052:
case 3464:
case 3732:
case 2289:
case 1904:
case 2498:
case 764:
case 2332:
case 3829:
case 522:
case 656:
case 2122:
case 1877:
case 3893:
case 3634:
case 574:
case 36:
case 1346:
case 671:
case 2834:
case 1405:
case 894:
case 1886:
case 881:
case 2275:
case 4:
case 1560:
case 4030:
case 3397:
case 179:
case 778:
case 3994:
case 2797:
case 2968:
case 3278:
case 2077:
case 1314:
case 3508:
case 1917:
case 89:
case 3159:
case 1479:
case 291:
case 2460:
case 2209:
case 284:
case 1984:
case 3896:
case 442:
case 2505:
case 4029:
case 2630:
case 3427:
case 1485:
case 1361:
case 3135:
case 3728:
case 76:
case 3830:
case 1883:
case 1942:
case 3248:
case 560:
case 1376:
case 364:
case 2003:
case 1034:
case 3754:
case 195:
case 2990:
case 2957:
case 770:
case 1244:
case 2035:
case 1666:
case 2568:
case 41:
case 3186:
case 1572:
case 1622:
case 1758:
case 141:
case 1960:
case 3400:
case 3594:
case 2484:
case 3103:
case 1019:
case 1671:
case 3988:
case 3041:
case 1282:
case 1213:
case 3063:
case 736:
case 1490:
case 1504:
case 820:
case 1129:
case 696:
case 1542:
case 2819:
case 1130:
case 1274:
case 857:
case 2557:
case 3112:
case 1433:
case 3183:
case 276:
case 1998:
case 3292:
case 1216:
case 3066:
case 251:
case 2421:
case 2237:
case 1196:
case 1202:
case 1468:
case 1517:
case 632:
case 792:
case 613:
case 414:
case 1683:
case 580:
case 1612:
case 2427:
case 3936:
case 1787:
case 537:
case 338:
case 3141:
case 391:
case 1900:
case 2159:
case 3163:
case 965:
case 1488:
case 264:
case 3725:
case 3003:
case 1119:
case 3957:
case 3086:
case 4034:
case 53:
case 826:
case 1564:
case 3354:
case 2551:
case 2135:
case 1595:
case 3549:
case 1761:
case 2830:
case 3328:
case 1743:
case 861:
case 3047:
case 534:
case 1686:
case 404:
case 2893:
case 1603:
case 2634:
case 3171:
case 603:
case 2495:
case 588:
case 1451:
case 2732:
case 2464:
case 1707:
case 3498:
case 2588:
case 3332:
case 330:
case 2350:
case 2397:
case 791:
case 3579:
case 3629:
case 784:
case 2994:
case 1030:
case 1262:
case 3750:
case 3968:
case 3797:
case 139:
case 738:
case 3083:
case 252:
case 698:
case 2411:
case 1:
case 3693:
case 1527:
case 3275:
case 3557:
case 2480:
case 2183:
case 455:
case 519:
case 902:
case 650:
case 1838:
case 3949:
case 3819:
case 1659:
case 2619:
case 2071:
case 911:
case 1863:
case 3905:
case 2022:
case 1465:
case 351:
case 2066:
case 1500:
case 1494:
case 3237:
case 3421:
case 1152:
case 3472:
case 2186:
case 441:
case 3568:
case 3417:
case 4019:
case 2038:
case 3979:
case 751:
case 1270:
case 2103:
case 2269:
case 2594:
case 3484:
case 3391:
case 1927:
case 292:
case 1755:
case 658:
case 3035:
case 3985:
case 1866:
case 627:
case 3315:
case 3442:
case 1871:
case 2041:
case 2988:
case 543:
case 117:
case 3718:
case 345:
case 1822:
case 815:
case 2318:
case 3533:
case 1656:
case 3802:
case 1365:
case 3973:
case 2772:
case 960:
case 2109:
case 1950:
case 4082:
case 2558:
case 3304:
case 3907:
case 2380:
case 3539:
case 2238:
case 2704:
case 2910:
case 1070:
case 2840:
case 3874:
case 60:
case 2602:
case 3148:
case 4044:
case 3235:
case 2616:
case 2501:
case 3882:
case 3520:
case 3961:
case 1401:
case 512:
case 2222:
case 3342:
case 909:
case 4002:
case 2266:
case 1757:
case 3976:
case 3037:
case 2418:
case 968:
case 2784:
case 3317:
case 501:
case 431:
case 974:
case 1458:
case 4074:
case 2717:
case 3384:
case 3987:
case 1736:
case 922:
case 2581:
case 2175:
case 1040:
case 2870:
case 1869:
case 740:
case 3206:
case 3192:
case 2510:
case 2823:
case 1388:
case 54:
case 1230:
case 3454:
case 1062:
case 3212:
case 3939:
case 1026:
case 3428:
case 1785:
case 3075:
case 655:
case 1645:
case 3699:
case 2327:
case 424:
case 3727:
case 623:
case 3546:
case 472:
case 1296:
case 348:
case 2760:
case 2958:
case 1116:
case 2137:
case 3360:
case 818:
case 1550:
case 1597:
case 2153:
case 458:
case 3587:
case 3203:
case 3169:
case 42:
case 3286:
case 3514:
case 3045:
case 1705:
case 1023:
case 2862:
case 3711:
case 641:
case 1689:
case 2048:
case 2981:
case 3662:
case 1749:
case 3920:
case 1229:
case 810:
case 1410:
case 196:
case 3576:
case 3398:
case 1016:
case 3266:
case 746:
case 2037:
case 808:
case 456:
case 1954:
case 3418:
case 1357:
case 2670:
case 2520:
case 1669:
case 869:
case 2961:
case 2813:
case 1928:
case 3175:
case 2491:
case 1126:
case 639:
case 3870:
case 3682:
case 2317:
case 1074:
case 799:
case 2700:
case 988:
case 6:
case 2384:
case 3717:
case 893:
case 131:
case 2056:
case 3300:
case 3241:
case 1082:
case 2321:
case 2640:
case 3772:
case 2973:
case 2259:
case 3109:
case 3263:
case 2372:
case 3558:
case 800:
case 93:
case 283:
case 3674:
case 2555:
case 2874:
case 2148:
case 1420:
case 937:
case 3616:
case 1123:
case 2304:
case 775:
case 816:
case 2907:
case 1199:
case 3145:
case 3910:
case 2053:
case 1932:
case 3069:
case 1446:
case 3862:
case 943:
case 1305:
case 4023:
case 3048:
case 1473:
case 449:
case 12:
case 3153:
case 853:
case 2169:
case 2587:
case 3450:
case 2286:
case 158:
case 2045:
case 2514:
case 1875:
case 1554:
case 1407:
case 3798:
case 240:
case 2398:
case 1528:
case 2662:
case 1751:
case 1349:
case 1461:
case 1140:
case 3901:
case 4026:
case 2428:
case 1915:
case 3899:
case 2206:
case 2192:
case 3510:
case 1532:
case 150:
case 1476:
case 3823:
case 1631:
case 2939:
case 2283:
case 1788:
case 3078:
case 3760:
case 1414:
case 3958:
case 2089:
case 413:
case 2573:
case 1487:
case 3137:
case 2360:
case 2247:
case 2699:
case 919:
case 3924:
case 2955:
case 2727:
case 1809:
case 4036:
case 2000:
case 3356:
case 2392:
case 3084:
case 3665:
case 3792:
case 2993:
case 1340:
case 1571:
case 1672:
case 1880:
case 3833:
case 1604:
case 1281:
case 781:
case 2894:
case 2865:
case 878:
case 503:
case 1179:
case 2441:
case 173:
case 1702:
case 433:
case 2463:
case 1370:
case 2369:
case 705:
case 3353:
case 2996:
case 3769:
case 2753:
case 3952:
case 381:
case 1800:
case 1105:
case 3836:
case 2657:
case 3291:
case 63:
case 852:
case 867:
case 1617:
case 637:
case 3890:
case 1065:
case 3195:
case 2471:
case 1149:
case 2218:
case 1782:
case 3164:
case 3072:
case 2466:
case 4068:
case 3519:
case 3021:
case 643:
case 1051:
case 754:
case 3688:
case 2331:
case 3309:
case 282:
case 35:
case 2121:
case 1168:
case 328:
case 1827:
case 527:
case 2064:
case 666:
case 3345:
case 3412:
case 2225:
case 2104:
case 1133:
case 2593:
case 3483:
case 2745:
case 3885:
case 3406:
case 362:
case 3228:
case 2348:
case 1971:
case 917:
case 2888:
case 3748:
case 572:
case 1864:
case 524:
case 2851:
case 1895:
case 1938:
case 757:
case 1190:
case 2530:
case 4079:
case 3477:
case 1493:
case 1136:
case 728:
case 2596:
case 44:
case 2117:
case 1362:
case 75:
case 3778:
case 1963:
case 2184:
case 2649:
case 2775:
case 1698:
case 354:
case 2111:
case 88:
case 3690:
case 3369:
case 2353:
case 3996:
case 2769:
case 3080:
case 2004:
case 660:
case 1033:
case 2952:
case 3753:
case 2072:
case 4094:
case 2164:
case 1842:
case 1239:
case 3466:
case 726:
case 3198:
case 1906:
case 2021:
case 1382:
case 3422:
case 2857:
case 2195:
case 677:
case 995:
case 1151:
case 1535:
case 1600:
case 361:
case 2694:
case 3668:
case 1804:
case 326:
case 101:
case 2084:
case 3392:
case 3756:
case 1374:
case 3993:
case 2017:
case 2665:
case 556:
case 3737:
case 133:
case 1302:
case 29:
case 205:
case 3463:
case 2042:
case 1872:
case 979:
case 112:
case 3894:
case 2232:
case 2849:
case 3851:
case 2919:
case 315:
case 1935:
case 1898:
case 402:
case 3027:
case 2608:
case 3142:
case 3808:
case 1547:
case 1726:
case 1085:
case 3775:
case 4088:
case 3596:
case 2486:
case 2805:
case 3378:
case 2552:
case 3117:
case 429:
case 1959:
case 1434:
case 1695:
case 1762:
case 3250:
case 3184:
case 3297:
case 2651:
case 2309:
case 382:
case 1287:
case 1503:
case 3121:
case 1586:
case 1452:
case 3172:
case 1860:
case 2879:
case 1049:
case 2731:
case 2447:
case 4051:
case 2228:
case 2748:
case 3888:
case 3011:
case 1261:
case 3679:
case 2345:
case 2180:
case 3104:
case 4008:
case 876:
case 1799:
case 549:
case 2885:
case 715:
case 1276:
case 262:
case 1205:
case 389:
case 3607:
case 3191:
case 2475:
case 460:
case 1043:
case 3211:
case 1061:
case 665:
case 2054:
case 3025:
case 3703:
case 293:
case 1158:
case 2303:
case 2916:
case 47:
case 3786:
case 1937:
case 477:
case 3646:
case 1087:
case 1956:
case 3777:
case 2118:
case 208:
case 2974:
case 3264:
case 835:
case 2489:
case 1697:
case 3810:
case 1249:
case 180:
case 1101:
case 542:
case 269:
case 1854:
case 1285:
case 3687:
case 2312:
case 2843:
case 1730:
case 2306:
case 3050:
case 3097:
case 3712:
case 539:
case 2032:
case 2260:
case 1953:
case 1279:
case 3661:
case 2409:
case 1352:
case 474:
case 134:
case 3747:
case 2887:
case 789:
case 188:
case 2347:
case 2814:
case 1575:
case 1257:
case 1290:
case 2574:
case 1945:
case 310:
case 1413:
case 3801:
case 2242:
case 2722:
case 950:
case 629:
case 611:
case 1444:
case 3639:
case 1618:
case 924:
case 121:
case 1909:
case 3469:
case 4067:
case 1236:
case 718:
case 119:
case 1268:
case 3962:
case 3018:
case 3759:
case 2741:
case 517:
case 3881:
case 1039:
case 1416:
case 706:
case 3620:
case 2437:
case 848:
case 1975:
case 92:
case 166:
case 927:
case 2335:
case 486:
case 1055:
case 2091:
case 2820:
case 710:
case 2456:
case 1474:
case 51:
case 2681:
case 3280:
case 3154:
case 2738:
case 2204:
case 4073:
case 708:
case 3383:
case 1330:
case 846:
case 579:
case 3982:
case 316:
case 2783:
case 1288:
case 2712:
case 3913:
case 2614:
case 1825:
case 2448:
case 4046:
case 769:
case 2687:
case 956:
case 2676:
case 3887:
case 633:
case 2747:
case 434:
case 971:
case 3814:
case 1654:
case 504:
case 1752:
case 1010:
case 1969:
case 2970:
case 1396:
case 1208:
case 1734:
case 2025:
case 3054:
case 595:
case 2478:
case 43:
case 700:
case 3303:
case 2786:
case 3846:
case 3028:
case 289:
case 4061:
case 1155:
case 1531:
case 3475:
case 2191:
case 3873:
case 1632:
case 2211:
case 1897:
case 3610:
case 1329:
case 1251:
case 3807:
case 1548:
case 1992:
case 177:
case 1393:
case 3377:
case 2926:
case 2018:
case 218:
case 2962:
case 753:
case 1114:
case 2881:
case 3741:
case 1978:
case 443:
case 2363:
case 2620:
case 1569:
case 3221:
case 2492:
case 3513:
case 3456:
case 2154:
case 3738:
case 3204:
case 186:
case 996:
case 1161:
case 3335:
case 2128:
case 3091:
case 2735:
case 1818:
case 1081:
case 2322:
case 1948:
case 3242:
case 3624:
case 3766:
case 1107:
case 2132:
case 210:
case 1592:
case 2801:
case 419:
case 1173:
case 2200:
case 3453:
case 3197:
case 421:
case 1615:
case 555:
case 2824:
case 64:
case 4020:
case 1931:
case 2858:
case 2002:
case 203:
case 2954:
case 837:
case 135:
case 356:
case 3790:
case 1976:
case 1342:
case 880:
case 1520:
case 1882:
case 3401:
case 916:
case 3653:
case 2126:
case 3869:
case 900:
case 3040:
case 3424:
case 1491:
case 1384:
case 231:
case 1056:
case 3736:
case 1987:
case 2074:
case 83:
case 526:
case 1844:
case 1700:
case 371:
case 1914:
case 2082:
case 3394:
case 1973:
case 3997:
case 2013:
case 3768:
case 3365:
case 678:
case 1555:
case 1131:
case 834:
case 993:
case 1816:
case 2765:
case 1946:
case 3892:
case 3637:
case 463:
case 664:
case 2515:
case 1053:
case 2932:
case 290:
case 2219:
case 2333:
case 969:
case 446:
case 1539:
case 3467:
case 1907:
case 2199:
case 3689:
case 1711:
case 2305:
case 3023:
case 2446:
case 4048:
case 3705:
case 732:
case 1286:
case 692:
case 713:
case 258:
case 1045:
case 1514:
case 2708:
case 2234:
case 1169:
case 1587:
case 819:
case 3182:
case 1398:
case 1576:
case 3113:
case 1277:
case 3675:
case 582:
case 3293:
case 3351:
case 1561:
case 4031:
case 2678:
case 2528:
case 1795:
case 1428:
case 1075:
case 636:
case 3026:
case 2443:
case 3609:
case 2140:
case 3918:
case 2631:
case 3848:
case 796:
case 250:
case 3116:
case 459:
case 3550:
case 2487:
case 2379:
case 1360:
case 2648:
case 148:
case 749:
case 3102:
case 2252:
case 1089:
case 1546:
case 866:
case 1699:
case 3645:
case 2991:
case 1955:
case 691:
case 1674:
case 2481:
case 2365:
case 684:
case 2656:
case 483:
case 3765:
case 638:
case 874:
case 1721:
case 798:
case 3368:
case 1558:
case 989:
case 1772:
case 1241:
case 731:
case 3013:
case 2997:
case 3932:
case 1238:
case 1704:
case 390:
case 1069:
case 2070:
case 3219:
case 809:
case 2467:
case 2637:
case 868:
case 3123:
case 3856:
case 1616:
case 1501:
case 3044:
case 1602:
case 163:
case 3928:
case 2653:
case 2401:
case 435:
case 1418:
case 303:
case 59:
case 3439:
case 687:
case 505:
case 1189:
case 256:
case 3016:
case 790:
case 877:
case 1717:
case 87:
case 1300:
case 1784:
case 398:
case 3162:
case 2458:
case 271:
case 4056:
case 3853:
case 1613:
case 2040:
case 1870:
case 860:
case 3455:
case 3631:
case 2230:
case 1425:
case 2918:
case 1078:
case 2848:
case 3476:
case 2785:
case 1899:
case 2026:
case 3443:
case 910:
case 3385:
case 324:
case 3991:
case 72:
case 3379:
case 4089:
case 2597:
case 3487:
case 2550:
case 758:
case 159:
case 2831:
case 2779:
case 3414:
case 358:
case 2308:
case 562:
case 557:
case 2099:
case 1153:
case 1826:
case 32:
case 1450:
case 3708:
case 3170:
case 1862:
case 2689:
case 1048:
case 772:
case 2878:
case 1311:
case 3446:
case 2023:
case 2351:
case 3678:
case 645:
case 3889:
case 2182:
case 296:
case 327:
case 3554:
case 2675:
case 440:
case 1798:
case 4009:
case 3407:
case 242:
case 569:
case 2683:
case 1896:
case 2612:
case 4077:
case 2714:
case 1159:
case 508:
case 178:
case 779:
case 438:
case 3847:
case 2093:
case 484:
case 2776:
case 1325:
case 2299:
case 4086:
case 593:
case 164:
case 961:
case 3376:
case 2119:
case 1652:
case 1830:
case 1248:
case 3942:
case 3485:
case 2595:
case 704:
case 2223:
case 1728:
case 3449:
case 1495:
case 4047:
case 2603:
case 2451:
case 16:
case 1893:
case 70:
case 2310:
case 795:
case 3307:
case 500:
case 2980:
case 3904:
case 1732:
case 1464:
case 2030:
case 2262:
case 4012:
case 1350:
case 3560:
case 3921:
case 2527:
case 2677:
case 865:
case 167:
case 152:
case 2226:
case 3835:
case 1292:
case 553:
case 3767:
case 355:
case 136:
case 1112:
case 3130:
case 1183:
case 2964:
case 3433:
case 3663:
case 915:
case 1951:
case 2995:
case 3641:
case 3320:
case 1147:
case 2465:
case 1022:
case 1071:
case 3859:
case 2863:
case 214:
case 3638:
case 3202:
case 323:
case 3196:
case 3517:
case 2152:
case 2500:
case 3216:
case 2494:
case 3584:
case 1038:
case 3758:
case 341:
case 3671:
case 2134:
case 1269:
case 723:
case 3436:
case 3572:
case 3622:
case 3724:
case 1565:
case 4035:
case 3244:
case 2927:
case 640:
case 3701:
case 2866:
case 2301:
case 3129:
case 3339:
case 2822:
case 2580:
case 4059:
case 3490:
case 3504:
case 3193:
case 3282:
case 2739:
case 1041:
case 1988:
case 217:
case 1063:
case 755:
case 1498:
case 3707:
case 1166:
case 1332:
case 3310:
case 3980:
case 2052:
case 1289:
case 1171:
case 2449:
case 3603:
case 1585:
case 187:
case 1122:
case 46:
case 467:
case 452:
case 1693:
case 1275:
case 3677:
case 3527:
case 742:
case 2803:
case 1012:
case 3030:
case 1083:
case 2972:
case 339:
case 3773:
case 1629:
case 2921:
case 3900:
case 994:
case 1141:
case 2479:
case 207:
case 2984:
case 1163:
case 1209:
case 981:
case 1077:
case 2847:
case 1936:
case 739:
case 138:
case 3093:
case 342:
case 699:
case 3511:
case 3606:
case 1505:
case 812:
case 2812:
case 3761:
case 646:
case 1696:
case 3743:
case 1328:
case 2883:
case 2485:
case 3595:
case 2806:
case 2343:
case 464:
case 3776:
case 1245:
case 3299:
case 3564:
case 3647:
case 20:
case 2598:
case 3488:
case 1003:
case 1725:
case 295:
case 95:
case 2244:
case 3927:
case 1253:
case 1979:
case 2758:
case 1484:
case 3134:
case 2671:
case 2521:
case 4038:
case 2436:
case 84:
case 2622:
case 2490:
case 4041:
case 847:
case 2193:
case 1533:
case 2282:
case 518:
case 1718:
case 2213:
case 2701:
case 1315:
case 1985:
case 957:
case 2129:
case 2663:
case 920:
case 3240:
case 2320:
case 2641:
case 3720:
case 2542:
case 2835:
case 717:
case 255:
case 2274:
case 1590:
case 1557:
case 3964:
case 2202:
case 2468:
case 510:
case 1536:
case 4066:
case 1472:
case 954:
case 1421:
case 2584:
case 3381:
case 3465:
case 1905:
case 844:
case 4071:
case 2781:
case 2638:
case 3911:
case 314:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751767201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,];
var gg_b = "1751767201/";

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
