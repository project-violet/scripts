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
case 408:
case 3109:
case 1780:
case 2602:
case 16:
case 1326:
case 1761:
case 4014:
case 3485:
case 1758:
case 3887:
case 2599:
case 3957:
case 2056:
case 1754:
case 3408:
case 138:
case 4018:
case 2214:
case 236:
case 2352:
case 1502:
case 4013:
case 921:
case 3885:
case 126:
case 3030:
case 2043:
case 3487:
case 2712:
case 1699:
case 1252:
case 2512:
case 52:
case 386:
case 1285:
case 2265:
case 930:
case 2658:
case 1075:
case 317:
case 2130:
case 1092:
case 1365:
case 2304:
case 1554:
case 4067:
case 3148:
case 2799:
case 1612:
case 3452:
case 1553:
case 2267:
case 346:
case 2308:
case 1558:
case 2581:
case 1580:
case 1203:
case 1561:
case 2296:
case 2560:
case 3911:
case 3449:
case 566:
case 2654:
case 2387:
case 1367:
case 3156:
case 1096:
case 1571:
case 2570:
case 2309:
case 611:
case 353:
case 2003:
case 2798:
case 993:
case 1624:
case 4075:
case 2008:
case 881:
case 3448:
case 3856:
case 2523:
case 4092:
case 2516:
case 3443:
case 1542:
case 2087:
case 2528:
case 2277:
case 3986:
case 3940:
case 2933:
case 3444:
case 4077:
case 1375:
case 900:
case 3848:
case 392:
case 3456:
case 1616:
case 3149:
case 1623:
case 2275:
case 1831:
case 2642:
case 1065:
case 2794:
case 1628:
case 1243:
case 108:
case 206:
case 3409:
case 4019:
case 46:
case 2724:
case 2343:
case 3330:
case 2049:
case 3104:
case 1693:
case 3635:
case 399:
case 2606:
case 76:
case 438:
case 3103:
case 1018:
case 1694:
case 3809:
case 1256:
case 1319:
case 3108:
case 1026:
case 2723:
case 4022:
case 2219:
case 2593:
case 1771:
case 1506:
case 2356:
case 938:
case 1284:
case 502:
case 1074:
case 231:
case 3902:
case 2264:
case 3147:
case 4063:
case 121:
case 550:
case 926:
case 2384:
case 4079:
case 1782:
case 4051:
case 2600:
case 2388:
case 3191:
case 3032:
case 759:
case 1207:
case 472:
case 1250:
case 2383:
case 2251:
case 1069:
case 1711:
case 96:
case 2021:
case 1020:
case 1078:
case 2268:
case 1288:
case 772:
case 1073:
case 2776:
case 1379:
case 899:
case 1283:
case 2350:
case 104:
case 1662:
case 2045:
case 2701:
case 3883:
case 1700:
case 2682:
case 686:
case 341:
case 3189:
case 2217:
case 479:
case 617:
case 892:
case 2436:
case 887:
case 3961:
case 561:
case 700:
case 3980:
case 3405:
case 853:
case 1676:
case 2562:
case 1582:
case 3483:
case 646:
case 255:
case 3450:
case 1610:
case 847:
case 2836:
case 3421:
case 653:
case 179:
case 2541:
case 846:
case 465:
case 539:
case 100:
case 2432:
case 3634:
case 2686:
case 2572:
case 2725:
case 152:
case 3188:
case 616:
case 3889:
case 3959:
case 3183:
case 886:
case 430:
case 2832:
case 1586:
case 692:
case 3942:
case 2290:
case 1291:
case 817:
case 1672:
case 2566:
case 1245:
case 1017:
case 3150:
case 262:
case 730:
case 2727:
case 2088:
case 3332:
case 2527:
case 4074:
case 2278:
case 2389:
case 3891:
case 2321:
case 2766:
case 1063:
case 1369:
case 2273:
case 2797:
case 421:
case 2935:
case 1079:
case 2220:
case 1373:
case 1289:
case 699:
case 532:
case 908:
case 1627:
case 927:
case 4069:
case 159:
case 2005:
case 2274:
case 2084:
case 4073:
case 673:
case 57:
case 391:
case 483:
case 2302:
case 1626:
case 2765:
case 1618:
case 1094:
case 1785:
case 22:
case 3461:
case 3905:
case 1202:
case 3480:
case 2514:
case 842:
case 3854:
case 1549:
case 2652:
case 696:
case 40:
case 2526:
case 2513:
case 3171:
case 168:
case 757:
case 3858:
case 113:
case 2767:
case 3983:
case 1093:
case 2796:
case 3861:
case 1399:
case 897:
case 70:
case 612:
case 2006:
case 3880:
case 2649:
case 1708:
case 477:
case 960:
case 1508:
case 2260:
case 2596:
case 1261:
case 2229:
case 2059:
case 2042:
case 2135:
case 777:
case 3106:
case 1028:
case 2380:
case 1381:
case 1360:
case 2726:
case 2713:
case 1329:
case 1024:
case 2714:
case 528:
case 2346:
case 2608:
case 1254:
case 1749:
case 935:
case 1696:
case 1312:
case 2603:
case 3802:
case 849:
case 536:
case 2354:
case 1504:
case 176:
case 971:
case 2137:
case 4081:
case 2212:
case 4029:
case 1677:
case 3947:
case 177:
case 1324:
case 3102:
case 905:
case 537:
case 4070:
case 2722:
case 2609:
case 1748:
case 2054:
case 649:
case 2224:
case 4028:
case 2837:
case 2435:
case 4023:
case 4024:
case 2577:
case 3945:
case 1675:
case 776:
case 1242:
case 2216:
case 1756:
case 2359:
case 1509:
case 2342:
case 689:
case 476:
case 1328:
case 1081:
case 2270:
case 1271:
case 1692:
case 1060:
case 2835:
case 2061:
case 183:
case 1544:
case 3859:
case 3871:
case 2293:
case 43:
case 4094:
case 456:
case 1393:
case 2648:
case 2306:
case 1709:
case 682:
case 1398:
case 267:
case 3630:
case 756:
case 2644:
case 3459:
case 1619:
case 3471:
case 2792:
case 1394:
case 929:
case 4093:
case 2522:
case 2656:
case 768:
case 3531:
case 713:
case 2775:
case 1543:
case 691:
case 2201:
case 1583:
case 3482:
case 764:
case 2439:
case 1257:
case 1588:
case 261:
case 429:
case 1027:
case 2579:
case 3811:
case 2551:
case 2300:
case 1550:
case 3186:
case 2134:
case 2684:
case 3636:
case 729:
case 3140:
case 2839:
case 1025:
case 151:
case 3952:
case 520:
case 555:
case 270:
case 1584:
case 2764:
case 2040:
case 3339:
case 1041:
case 3033:
case 1095:
case 1362:
case 3038:
case 2382:
case 3457:
case 225:
case 531:
case 1617:
case 171:
case 3400:
case 3904:
case 1707:
case 405:
case 2779:
case 4062:
case 3908:
case 2751:
case 722:
case 3455:
case 2517:
case 6:
case 3800:
case 1783:
case 3034:
case 1066:
case 2778:
case 771:
case 4095:
case 569:
case 4041:
case 1076:
case 1286:
case 274:
case 471:
case 349:
case 2386:
case 1010:
case 8:
case 4072:
case 1721:
case 977:
case 122:
case 3333:
case 2340:
case 1341:
case 2272:
case 2645:
case 3338:
case 1547:
case 2082:
case 3155:
case 623:
case 1372:
case 943:
case 2838:
case 2621:
case 1325:
case 2833:
case 2574:
case 4027:
case 1931:
case 397:
case 2434:
case 1747:
case 957:
case 239:
case 3948:
case 2055:
case 2438:
case 983:
case 1589:
case 1521:
case 3440:
case 1674:
case 1745:
case 2790:
case 2000:
case 3886:
case 2227:
case 751:
case 332:
case 3295:
case 1233:
case 3241:
case 1992:
case 1238:
case 2155:
case 91:
case 3340:
case 1427:
case 3082:
case 3645:
case 1101:
case 3011:
case 3769:
case 1827:
case 2909:
case 1977:
case 2886:
case 3834:
case 3573:
case 1472:
case 3790:
case 1110:
case 2111:
case 3578:
case 785:
case 994:
case 498:
case 3520:
case 3438:
case 1495:
case 485:
case 1532:
case 3433:
case 1441:
case 1176:
case 1919:
case 2440:
case 2486:
case 2943:
case 1922:
case 745:
case 2948:
case 282:
case 3139:
case 115:
case 3689:
case 445:
case 3833:
case 866:
case 1162:
case 3650:
case 1914:
case 3607:
case 1536:
case 581:
case 370:
case 309:
case 2140:
case 1141:
case 296:
case 3683:
case 666:
case 2952:
case 3715:
case 3839:
case 3551:
case 1810:
case 2811:
case 3684:
case 3357:
case 2636:
case 541:
case 1166:
case 3134:
case 3563:
case 1197:
case 1918:
case 2482:
case 3568:
case 361:
case 3717:
case 658:
case 1926:
case 3439:
case 145:
case 2455:
case 3517:
case 3768:
case 2857:
case 3763:
case 3086:
case 2800:
case 1996:
case 903:
case 94:
case 2908:
case 3210:
case 1239:
case 3515:
case 3262:
case 2904:
case 2985:
case 2400:
case 3040:
case 2339:
case 1736:
case 2033:
case 3764:
case 2038:
case 1125:
case 990:
case 632:
case 1898:
case 3342:
case 3061:
case 3437:
case 2945:
case 3058:
case 1990:
case 2991:
case 850:
case 3577:
case 1494:
case 133:
case 3359:
case 3371:
case 48:
case 1498:
case 3054:
case 703:
case 3435:
case 1493:
case 3592:
case 2406:
case 3837:
case 74:
case 11:
case 1730:
case 3575:
case 2102:
case 3609:
case 674:
case 44:
case 3722:
case 654:
case 2337:
case 516:
case 1423:
case 1530:
case 3775:
case 1428:
case 2471:
case 3792:
case 915:
case 1974:
case 3644:
case 3002:
case 1112:
case 861:
case 3306:
case 1978:
case 1816:
case 1973:
case 2161:
case 3643:
case 1631:
case 2842:
case 639:
case 367:
case 1181:
case 3777:
case 1828:
case 3932:
case 1235:
case 3293:
case 2859:
case 1424:
case 2153:
case 1969:
case 2921:
case 2880:
case 1128:
case 1881:
case 2035:
case 2907:
case 2861:
case 1829:
case 2142:
case 546:
case 670:
case 839:
case 1123:
case 2454:
case 2950:
case 1951:
case 3513:
case 3299:
case 3652:
case 1963:
case 2446:
case 2858:
case 1964:
case 2037:
case 2480:
case 2461:
case 1460:
case 3936:
case 1812:
case 2453:
case 661:
case 985:
case 2458:
case 3137:
case 378:
case 3565:
case 1915:
case 3212:
case 733:
case 3608:
case 3346:
case 3603:
case 2802:
case 2106:
case 3685:
case 71:
case 3718:
case 3042:
case 625:
case 3604:
case 3726:
case 1917:
case 650:
case 41:
case 3358:
case 3059:
case 3281:
case 3353:
case 14:
case 3260:
case 3229:
case 3566:
case 2942:
case 2107:
case 87:
case 1928:
case 184:
case 1534:
case 2150:
case 1151:
case 362:
case 2889:
case 1168:
case 2188:
case 1869:
case 542:
case 1970:
case 1163:
case 2971:
case 2959:
case 3597:
case 3136:
case 2184:
case 3572:
case 144:
case 3686:
case 1164:
case 2105:
case 1478:
case 414:
case 3725:
case 211:
case 2489:
case 1420:
case 918:
case 2421:
case 597:
case 582:
case 3541:
case 3432:
case 3595:
case 1874:
case 3741:
case 3795:
case 2036:
case 3937:
case 3005:
case 3274:
case 740:
case 1738:
case 301:
case 3525:
case 2491:
case 2445:
case 1994:
case 1993:
case 3935:
case 1232:
case 807:
case 369:
case 3797:
case 2906:
case 828:
case 1998:
case 1117:
case 3050:
case 606:
case 3278:
case 3527:
case 836:
case 2332:
case 3088:
case 837:
case 1415:
case 3307:
case 628:
case 607:
case 1817:
case 3268:
case 3350:
case 710:
case 3263:
case 636:
case 2191:
case 3388:
case 140:
case 806:
case 2145:
case 65:
case 410:
case 3021:
case 3279:
case 375:
case 3384:
case 3657:
case 2336:
case 1815:
case 1739:
case 1417:
case 3305:
case 3762:
case 331:
case 2902:
case 2147:
case 180:
case 1236:
case 519:
case 3611:
case 1479:
case 1451:
case 2450:
case 484:
case 1864:
case 2884:
case 2407:
case 1174:
case 2946:
case 1463:
case 3562:
case 988:
case 2488:
case 1539:
case 281:
case 1879:
case 2850:
case 444:
case 1178:
case 114:
case 1464:
case 3436:
case 1929:
case 1960:
case 2807:
case 2883:
case 3682:
case 3576:
case 744:
case 1863:
case 2888:
case 2121:
case 1120:
case 2189:
case 2953:
case 241:
case 1868:
case 1822:
case 2848:
case 292:
case 1114:
case 944:
case 2456:
case 662:
case 287:
case 2843:
case 3642:
case 3830:
case 3004:
case 1972:
case 163:
case 1737:
case 2444:
case 3659:
case 3292:
case 2940:
case 3671:
case 1419:
case 1995:
case 448:
case 2152:
case 3524:
case 3523:
case 3516:
case 984:
case 2856:
case 795:
case 3277:
case 820:
case 247:
case 3934:
case 788:
case 1966:
case 2844:
case 3309:
case 1997:
case 1819:
case 3793:
case 1113:
case 3008:
case 3798:
case 855:
case 4031:
case 3598:
case 875:
case 1167:
case 3219:
case 3770:
case 601:
case 1877:
case 3728:
case 1475:
case 1196:
case 831:
case 3723:
case 2108:
case 2809:
case 3344:
case 1927:
case 1331:
case 3724:
case 669:
case 337:
case 1537:
case 3606:
case 299:
case 2104:
case 1165:
case 2635:
case 3594:
case 306:
case 1875:
case 2231:
case 3222:
case 2409:
case 624:
case 328:
case 1031:
case 3349:
case 2030:
case 1865:
case 1192:
case 869:
case 2487:
case 1467:
case 2885:
case 2955:
case 336:
case 99:
case 1175:
case 824:
case 1465:
case 1867:
case 1901:
case 3056:
case 2957:
case 2109:
case 801:
case 3760:
case 1177:
case 3044:
case 3602:
case 3529:
case 3296:
case 3581:
case 718:
case 914:
case 2156:
case 1910:
case 2449:
case 620:
case 3654:
case 3387:
case 2452:
case 3009:
case 463:
case 1813:
case 3799:
case 418:
case 148:
case 1976:
case 655:
case 1818:
case 3130:
case 37:
case 3680:
case 217:
case 2148:
case 3385:
case 3304:
case 862:
case 1122:
case 2852:
case 1426:
case 3265:
case 188:
case 3658:
case 286:
case 142:
case 1956:
case 412:
case 2866:
case 3791:
case 3674:
case 3327:
case 2897:
case 2441:
case 2495:
case 3521:
case 584:
case 3589:
case 496:
case 1948:
case 182:
case 3678:
case 3747:
case 1943:
case 3673:
case 2872:
case 868:
case 2497:
case 813:
case 2841:
case 3325:
case 2895:
case 544:
case 215:
case 510:
case 1155:
case 189:
case 3240:
case 3547:
case 3690:
case 3341:
case 1039:
case 305:
case 3395:
case 2825:
case 322:
case 3721:
case 3366:
case 1157:
case 3010:
case 1334:
case 419:
case 2101:
case 2732:
case 3286:
case 4038:
case 719:
case 3076:
case 4033:
case 2425:
case 677:
case 3397:
case 2827:
case 3310:
case 3066:
case 2967:
case 2801:
case 540:
case 3615:
case 3788:
case 3211:
case 3376:
case 1908:
case 2996:
case 789:
case 3097:
case 2965:
case 3282:
case 119:
case 2401:
case 1985:
case 371:
case 580:
case 3617:
case 1855:
case 1038:
case 2125:
case 3784:
case 749:
case 2172:
case 442:
case 2914:
case 1949:
case 1411:
case 2410:
case 3668:
case 1952:
case 3025:
case 883:
case 298:
case 2141:
case 3663:
case 991:
case 1882:
case 2166:
case 857:
case 3507:
case 1636:
case 3664:
case 1186:
case 3550:
case 497:
case 2810:
case 1811:
case 656:
case 245:
case 2913:
case 514:
case 3257:
case 2926:
case 797:
case 63:
case 3583:
case 3543:
case 1442:
case 2530:
case 982:
case 1337:
case 997:
case 563:
case 1154:
case 1471:
case 2470:
case 2237:
case 1459:
case 2974:
case 343:
case 2129:
case 1842:
case 2160:
case 2973:
case 3398:
case 664:
case 3709:
case 2978:
case 3556:
case 1335:
case 2823:
case 3099:
case 3622:
case 2424:
case 2920:
case 2235:
case 1158:
case 3206:
case 383:
case 3323:
case 2893:
case 3692:
case 3081:
case 123:
case 4:
case 949:
case 871:
case 3509:
case 3756:
case 605:
case 3675:
case 1945:
case 2493:
case 1406:
case 3743:
case 21:
case 1731:
case 2730:
case 3324:
case 377:
case 919:
case 423:
case 376:
case 3585:
case 3312:
case 290:
case 3749:
case 3254:
case 3024:
case 3016:
case 3023:
case 2198:
case 3381:
case 3253:
case 2917:
case 203:
case 1402:
case 3280:
case 24:
case 635:
case 2123:
case 2116:
case 2979:
case 2951:
case 3614:
case 3703:
case 1880:
case 2829:
case 1035:
case 2860:
case 1983:
case 2963:
case 2170:
case 3787:
case 1446:
case 1171:
case 588:
case 595:
case 912:
case 1905:
case 2964:
case 1037:
case 1984:
case 2429:
case 1461:
case 2460:
case 3618:
case 3094:
case 1458:
case 1846:
case 3626:
case 2812:
case 3613:
case 3552:
case 1453:
case 996:
case 999:
case 2733:
case 359:
case 3064:
case 1445:
case 1491:
case 86:
case 2994:
case 2117:
case 973:
case 3289:
case 3221:
case 2232:
case 1906:
case 3369:
case 3320:
case 1891:
case 3063:
case 3786:
case 1447:
case 2734:
case 1332:
case 608:
case 1150:
case 3017:
case 2916:
case 781:
case 3245:
case 2873:
case 3291:
case 3672:
case 1942:
case 2534:
case 284:
case 3641:
case 2970:
case 1971:
case 3695:
case 393:
case 481:
case 1183:
case 2869:
case 3390:
case 2478:
case 352:
case 741:
case 3015:
case 3666:
case 1184:
case 2164:
case 244:
case 515:
case 2533:
case 300:
case 3540:
case 441:
case 2538:
case 916:
case 2420:
case 2864:
case 1805:
case 1407:
case 3315:
case 1884:
case 2479:
case 917:
case 1450:
case 2539:
case 330:
case 2912:
case 1488:
case 986:
case 3582:
case 1946:
case 3317:
case 1405:
case 2981:
case 1807:
case 1961:
case 1484:
case 2879:
case 3511:
case 1850:
case 2851:
case 365:
case 3757:
case 1888:
case 1639:
case 2120:
case 2868:
case 946:
case 141:
case 1953:
case 1189:
case 411:
case 2863:
case 3662:
case 304:
case 3351:
case 3073:
case 2415:
case 4036:
case 3288:
case 626:
case 3020:
case 3069:
case 3368:
case 3207:
case 1145:
case 2190:
case 1032:
case 240:
case 827:
case 3601:
case 3782:
case 2739:
case 3555:
case 3364:
case 66:
case 1147:
case 3205:
case 1902:
case 2236:
case 3506:
case 1637:
case 3244:
case 3759:
case 3771:
case 533:
case 3026:
case 3319:
case 3256:
case 672:
case 2877:
case 1103:
case 2475:
case 634:
case 1635:
case 3693:
case 2892:
case 3322:
case 3014:
case 3698:
case 2925:
case 1409:
case 3248:
case 327:
case 1231:
case 2875:
case 3628:
case 3065:
case 746:
case 1843:
case 3623:
case 1149:
case 3616:
case 1456:
case 1848:
case 3375:
case 446:
case 116:
case 263:
case 2737:
case 1940:
case 1986:
case 3067:
case 3431:
case 2966:
case 786:
case 3209:
case 1448:
case 2126:
case 600:
case 830:
case 3624:
case 486:
case 153:
case 3559:
case 1844:
case 3571:
case 2819:
case 717:
case 3367:
case 3208:
case 2910:
case 1449:
case 3561:
case 716:
case 3203:
case 630:
case 3558:
case 248:
case 787:
case 3077:
case 800:
case 941:
case 416:
case 3612:
case 792:
case 2826:
case 3396:
case 2122:
case 3554:
case 3629:
case 3131:
case 753:
case 3660:
case 117:
case 3075:
case 2962:
case 893:
case 747:
case 3285:
case 186:
case 2418:
case 453:
case 58:
case 1955:
case 473:
case 3699:
case 834:
case 3746:
case 1804:
case 1030:
case 326:
case 1885:
case 3314:
case 773:
case 2175:
case 338:
case 499:
case 54:
case 1887:
case 1404:
case 2465:
case 1485:
case 621:
case 2867:
case 3326:
case 799:
case 3318:
case 3962:
case 1658:
case 2546:
case 2075:
case 388:
case 955:
case 4008:
case 1939:
case 1512:
case 4087:
case 3122:
case 2365:
case 920:
case 1385:
case 3814:
case 1680:
case 53:
case 2702:
case 17:
case 2092:
case 884:
case 1267:
case 3818:
case 2287:
case 1308:
case 2558:
case 3976:
case 3119:
case 2396:
case 3826:
case 2612:
case 1799:
case 2553:
case 1303:
case 513:
case 1654:
case 3910:
case 4004:
case 3414:
case 2203:
case 2580:
case 1296:
case 844:
case 2561:
case 1560:
case 1529:
case 2780:
case 4052:
case 1781:
case 2019:
case 1760:
case 2326:
case 2761:
case 2313:
case 1729:
case 680:
case 737:
case 2318:
case 1213:
case 1056:
case 437:
case 3901:
case 706:
case 2758:
case 3465:
case 1352:
case 3496:
case 15:
case 3175:
case 640:
case 576:
case 2754:
case 2249:
case 136:
case 931:
case 1048:
case 226:
case 3467:
case 107:
case 2746:
case 1043:
case 1349:
case 975:
case 128:
case 3031:
case 2243:
case 840:
case 227:
case 3477:
case 1594:
case 106:
case 2693:
case 2322:
case 3165:
case 1348:
case 2014:
case 137:
case 3927:
case 2256:
case 2013:
case 610:
case 1723:
case 45:
case 707:
case 3475:
case 2694:
case 2018:
case 728:
case 3877:
case 436:
case 1770:
case 1219:
case 1593:
case 2759:
case 3167:
case 407:
case 428:
case 4043:
case 1798:
case 2377:
case 3126:
case 1008:
case 3113:
case 2571:
case 1570:
case 2096:
case 1003:
case 2559:
case 1309:
case 2431:
case 2067:
case 1934:
case 1277:
case 1528:
case 644:
case 583:
case 1516:
case 1523:
case 557:
case 1933:
case 3419:
case 318:
case 1292:
case 1659:
case 3737:
case 1642:
case 1830:
case 2065:
case 1004:
case 2628:
case 1794:
case 1085:
case 684:
case 3114:
case 2623:
case 2616:
case 2392:
case 3822:
case 2757:
case 688:
case 265:
case 695:
case 863:
case 3863:
case 1576:
case 2662:
case 1682:
case 1701:
case 3960:
case 3929:
case 2317:
case 3464:
case 3178:
case 3851:
case 1510:
case 3468:
case 2755:
case 1215:
case 648:
case 230:
case 2676:
case 3463:
case 1562:
case 1047:
case 2315:
case 551:
case 1836:
case 462:
case 3479:
case 2610:
case 1611:
case 424:
case 95:
case 39:
case 4088:
case 2284:
case 571:
case 2074:
case 131:
case 2601:
case 2782:
case 2364:
case 3417:
case 469:
case 221:
case 3815:
case 3739:
case 4007:
case 928:
case 1021:
case 1279:
case 2363:
case 2069:
case 2711:
case 2207:
case 340:
case 1388:
case 3190:
case 2368:
case 401:
case 1776:
case 2073:
case 204:
case 1350:
case 2500:
case 2283:
case 560:
case 1268:
case 3817:
case 2557:
case 2288:
case 701:
case 2786:
case 1083:
case 124:
case 1273:
case 1321:
case 3890:
case 775:
case 2221:
case 234:
case 1797:
case 2378:
case 3232:
case 3993:
case 3490:
case 2374:
case 3738:
case 1274:
case 937:
case 259:
case 2064:
case 1084:
case 3733:
case 1795:
case 3874:
case 2540:
case 3469:
case 564:
case 4091:
case 3420:
case 3538:
case 1725:
case 2015:
case 2247:
case 1686:
case 344:
case 2666:
case 1136:
case 293:
case 1597:
case 3970:
case 2695:
case 3820:
case 1391:
case 663:
case 895:
case 420:
case 3179:
case 3916:
case 755:
case 3878:
case 2017:
case 3151:
case 2586:
case 3928:
case 384:
case 2245:
case 1290:
case 2291:
case 2070:
case 1229:
case 1071:
case 1260:
case 2261:
case 2503:
case 1059:
case 1358:
case 1380:
case 3198:
case 3917:
case 2016:
case 3899:
case 2329:
case 2360:
case 1726:
case 1361:
case 2258:
case 1042:
case 1604:
case 1685:
case 2696:
case 390:
case 38:
case 3194:
case 1603:
case 1714:
case 950:
case 4058:
case 1608:
case 4080:
case 3915:
case 4061:
case 2504:
case 1687:
case 925:
case 178:
case 2246:
case 1765:
case 2704:
case 767:
case 256:
case 2618:
case 2785:
case 2552:
case 3124:
case 23:
case 909:
case 970:
case 12:
case 3481:
case 685:
case 268:
case 3170:
case 1767:
case 3968:
case 1652:
case 1299:
case 3951:
case 2098:
case 1649:
case 3829:
case 1796:
case 3128:
case 3881:
case 2703:
case 3920:
case 458:
case 3424:
case 72:
case 2544:
case 898:
case 1519:
case 1932:
case 3870:
case 1777:
case 394:
case 3828:
case 167:
case 758:
case 3129:
case 3631:
case 3823:
case 2622:
case 3816:
case 954:
case 1648:
case 2556:
case 1306:
case 3978:
case 3112:
case 2394:
case 845:
case 466:
case 3237:
case 20:
case 2619:
case 3470:
case 1775:
case 1522:
case 3423:
case 3416:
case 1656:
case 4006:
case 4071:
case 2748:
case 1609:
case 2677:
case 277:
case 1575:
case 3730:
case 1054:
case 527:
case 932:
case 508:
case 1223:
case 1371:
case 974:
case 1053:
case 2756:
case 1577:
case 1228:
case 2242:
case 1058:
case 2675:
case 1437:
case 1080:
case 1719:
case 2060:
case 1061:
case 3893:
case 2029:
case 2271:
case 3898:
case 833:
case 1764:
case 3736:
case 2784:
case 150:
case 521:
case 3965:
case 2072:
case 1262:
case 125:
case 3239:
case 271:
case 68:
case 1779:
case 504:
case 2750:
case 1751:
case 3127:
case 2097:
case 3996:
case 1086:
case 3967:
case 1276:
case 1763:
case 2066:
case 2788:
case 2615:
case 432:
case 1517:
case 2588:
case 3913:
case 3926:
case 2257:
case 1439:
case 739:
case 1717:
case 1201:
case 2583:
case 3197:
case 3876:
case 1605:
case 2664:
case 439:
case 2507:
case 1684:
case 1357:
case 3810:
case 1579:
case 1551:
case 2301:
case 2550:
case 2025:
case 385:
case 1715:
case 2255:
case 1138:
case 3476:
case 3141:
case 398:
case 3195:
case 530:
case 109:
case 170:
case 3536:
case 894:
case 2679:
case 552:
case 2325:
case 461:
case 1838:
case 315:
case 2669:
case 1621:
case 2678:
case 139:
case 694:
case 500:
case 3922:
case 761:
case 1225:
case 3466:
case 2673:
case 2931:
case 1930:
case 2747:
case 3919:
case 3441:
case 3176:
case 3532:
case 1569:
case 409:
case 1578:
case 1057:
case 593:
case 1790:
case 3866:
case 1573:
case 3472:
case 2745:
case 154:
case 2001:
case 2591:
case 534:
case 1590:
case 2545:
case 1773:
case 3977:
case 3234:
case 890:
case 1778:
case 3827:
case 4040:
case 702:
case 61:
case 450:
case 1386:
case 2721:
case 1720:
case 1769:
case 2010:
case 1011:
case 425:
case 1297:
case 1645:
case 2690:
case 1272:
case 1691:
case 633:
case 84:
case 1082:
case 2547:
case 222:
case 3427:
case 1340:
case 2341:
case 2395:
case 4086:
case 2240:
case 572:
case 3992:
case 1241:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760407202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,];
var gg_b = "1760407202/";

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
