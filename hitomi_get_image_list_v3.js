// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 4052:
case 2151:
case 2199:
case 1348:
case 1443:
case 3184:
case 321:
case 3047:
case 1731:
case 4013:
case 2328:
case 1905:
case 158:
case 1951:
case 798:
case 3460:
case 3970:
case 3600:
case 1812:
case 3497:
case 1694:
case 1871:
case 3094:
case 4061:
case 1625:
case 1482:
case 3420:
case 3054:
case 2303:
case 1054:
case 3242:
case 735:
case 2216:
case 3865:
case 2184:
case 1090:
case 471:
case 911:
case 1819:
case 693:
case 1940:
case 638:
case 43:
case 3628:
case 774:
case 222:
case 2951:
case 2852:
case 349:
case 3948:
case 492:
case 1198:
case 2269:
case 1867:
case 2263:
case 111:
case 2070:
case 3345:
case 695:
case 1548:
case 2463:
case 2787:
case 3304:
case 3779:
case 3766:
case 3791:
case 58:
case 161:
case 45:
case 3951:
case 2270:
case 1217:
case 765:
case 644:
case 1397:
case 2689:
case 3224:
case 2559:
case 3370:
case 1241:
case 4017:
case 3900:
case 1858:
case 2569:
case 3930:
case 1948:
case 527:
case 1928:
case 3997:
case 1947:
case 335:
case 1140:
case 820:
case 3417:
case 1451:
case 786:
case 732:
case 1180:
case 2751:
case 166:
case 3253:
case 1302:
case 1813:
case 3842:
case 3227:
case 1702:
case 2081:
case 2942:
case 2910:
case 1423:
case 3742:
case 3311:
case 3787:
case 2853:
case 3830:
case 2925:
case 254:
case 873:
case 1318:
case 2571:
case 255:
case 3598:
case 1765:
case 3981:
case 313:
case 1796:
case 3020:
case 694:
case 1391:
case 3962:
case 2003:
case 660:
case 1996:
case 3084:
case 2210:
case 2518:
case 706:
case 1453:
case 1636:
case 2434:
case 1622:
case 3376:
case 227:
case 2406:
case 3225:
case 4023:
case 3918:
case 1818:
case 3357:
case 134:
case 1304:
case 2096:
case 228:
case 1360:
case 1829:
case 3686:
case 2906:
case 247:
case 1521:
case 1999:
case 1704:
case 992:
case 1652:
case 1113:
case 2169:
case 3590:
case 3627:
case 1667:
case 1560:
case 1606:
case 3139:
case 1033:
case 1060:
case 2915:
case 2273:
case 999:
case 4080:
case 1254:
case 1942:
case 2876:
case 1938:
case 2029:
case 226:
case 1672:
case 620:
case 2375:
case 3745:
case 2475:
case 2593:
case 2237:
case 554:
case 398:
case 3123:
case 1353:
case 1549:
case 3723:
case 2832:
case 484:
case 858:
case 806:
case 151:
case 2033:
case 3340:
case 3721:
case 1555:
case 3703:
case 3889:
case 768:
case 3925:
case 3356:
case 3603:
case 1026:
case 167:
case 2550:
case 2788:
case 2059:
case 3746:
case 3700:
case 3727:
case 92:
case 2312:
case 557:
case 3439:
case 3593:
case 2715:
case 3484:
case 894:
case 536:
case 3307:
case 3219:
case 2315:
case 2085:
case 1781:
case 843:
case 1153:
case 707:
case 2567:
case 1315:
case 1733:
case 3857:
case 3715:
case 1396:
case 702:
case 636:
case 1977:
case 340:
case 1261:
case 875:
case 1772:
case 2515:
case 909:
case 2899:
case 1084:
case 3134:
case 3807:
case 2349:
case 975:
case 83:
case 3154:
case 1399:
case 1308:
case 1747:
case 2662:
case 110:
case 1998:
case 2078:
case 1640:
case 3662:
case 3261:
case 2726:
case 821:
case 2129:
case 839:
case 3147:
case 3372:
case 3803:
case 627:
case 958:
case 1524:
case 391:
case 2870:
case 3269:
case 2275:
case 2903:
case 2389:
case 3531:
case 1619:
case 3584:
case 733:
case 32:
case 3085:
case 293:
case 2025:
case 3979:
case 477:
case 466:
case 529:
case 1762:
case 421:
case 2049:
case 1927:
case 994:
case 156:
case 3535:
case 2791:
case 2454:
case 3157:
case 1016:
case 1895:
case 548:
case 3732:
case 2224:
case 588:
case 1659:
case 210:
case 1777:
case 242:
case 2505:
case 3576:
case 3328:
case 3971:
case 2652:
case 2987:
case 38:
case 625:
case 2954:
case 480:
case 479:
case 2089:
case 3434:
case 3112:
case 2667:
case 2918:
case 3011:
case 31:
case 1520:
case 2407:
case 1049:
case 3907:
case 48:
case 3285:
case 373:
case 1845:
case 3185:
case 2126:
case 2257:
case 1876:
case 835:
case 3246:
case 3648:
case 1032:
case 1846:
case 2707:
case 2665:
case 997:
case 2728:
case 1195:
case 1105:
case 1894:
case 861:
case 827:
case 2395:
case 878:
case 830:
case 3083:
case 2460:
case 1890:
case 601:
case 640:
case 658:
case 1387:
case 1450:
case 4058:
case 957:
case 1092:
case 2493:
case 519:
case 1121:
case 1012:
case 3538:
case 491:
case 3089:
case 2753:
case 2513:
case 569:
case 2607:
case 1849:
case 917:
case 4086:
case 3516:
case 3374:
case 934:
case 3391:
case 2530:
case 1085:
case 1923:
case 2710:
case 1971:
case 2339:
case 437:
case 2324:
case 572:
case 3704:
case 4020:
case 120:
case 1413:
case 2834:
case 955:
case 3446:
case 2724:
case 890:
case 1374:
case 1024:
case 3086:
case 3159:
case 2400:
case 3023:
case 3532:
case 2881:
case 191:
case 2259:
case 2021:
case 174:
case 3952:
case 3878:
case 465:
case 3509:
case 795:
case 2757:
case 1586:
case 3950:
case 2833:
case 1102:
case 2186:
case 1649:
case 3802:
case 2009:
case 3378:
case 3804:
case 3550:
case 633:
case 3026:
case 3750:
case 2769:
case 1377:
case 1686:
case 129:
case 1317:
case 3248:
case 135:
case 105:
case 3762:
case 112:
case 2223:
case 651:
case 1283:
case 712:
case 71:
case 1773:
case 2501:
case 3863:
case 776:
case 2079:
case 2517:
case 1330:
case 1339:
case 1182:
case 3647:
case 1245:
case 3917:
case 1909:
case 2294:
case 2465:
case 3073:
case 3995:
case 1485:
case 1677:
case 2634:
case 3678:
case 452:
case 1797:
case 1933:
case 2212:
case 142:
case 1830:
case 270:
case 2587:
case 3088:
case 4007:
case 4028:
case 1788:
case 327:
case 1185:
case 3435:
case 416:
case 3720:
case 2053:
case 3675:
case 836:
case 19:
case 2620:
case 208:
case 1218:
case 1980:
case 711:
case 1472:
case 1541:
case 1264:
case 3445:
case 2093:
case 1633:
case 3200:
case 696:
case 2904:
case 3259:
case 2175:
case 826:
case 3873:
case 853:
case 2524:
case 3987:
case 2927:
case 284:
case 681:
case 425:
case 2945:
case 1886:
case 1571:
case 2240:
case 3283:
case 3945:
case 3319:
case 3994:
case 3966:
case 2060:
case 3890:
case 1403:
case 2830:
case 1931:
case 3389:
case 2880:
case 2038:
case 331:
case 4003:
case 736:
case 440:
case 2796:
case 3188:
case 796:
case 2614:
case 2886:
case 2449:
case 3465:
case 3640:
case 1537:
case 2692:
case 726:
case 1347:
case 2615:
case 2780:
case 3294:
case 1599:
case 372:
case 1946:
case 1286:
case 355:
case 4043:
case 860:
case 3763:
case 2134:
case 3109:
case 141:
case 3976:
case 1514:
case 4008:
case 4095:
case 1530:
case 2054:
case 1617:
case 2763:
case 1879:
case 3075:
case 1136:
case 862:
case 125:
case 251:
case 65:
case 4072:
case 3568:
case 1157:
case 3351:
case 303:
case 2929:
case 198:
case 3521:
case 2017:
case 1232:
case 592:
case 2826:
case 2272:
case 2006:
case 2744:
case 3684:
case 998:
case 2770:
case 814:
case 1071:
case 2008:
case 1088:
case 1104:
case 1916:
case 3872:
case 1484:
case 845:
case 1214:
case 3107:
case 3574:
case 2146:
case 2804:
case 304:
case 3695:
case 555:
case 2484:
case 3392:
case 1670:
case 3668:
case 3177:
case 3474:
case 2433:
case 1380:
case 3588:
case 2490:
case 2014:
case 2042:
case 1426:
case 2823:
case 1282:
case 3549:
case 3318:
case 2552:
case 1373:
case 244:
case 2877:
case 2639:
case 1647:
case 1376:
case 929:
case 2784:
case 3692:
case 2485:
case 2737:
case 233:
case 3384:
case 3287:
case 2995:
case 3999:
case 3834:
case 1461:
case 1473:
case 2114:
case 2756:
case 3506:
case 2869:
case 1936:
case 4022:
case 3449:
case 2069:
case 380:
case 414:
case 3708:
case 352:
case 2162:
case 2489:
case 910:
case 649:
case 2619:
case 86:
case 1732:
case 3441:
case 2551:
case 3156:
case 311:
case 2444:
case 2577:
case 41:
case 44:
case 1578:
case 2846:
case 3733:
case 3935:
case 3679:
case 2367:
case 2685:
case 3101:
case 365:
case 396:
case 3060:
case 2399:
case 2705:
case 2688:
case 2196:
case 2742:
case 2885:
case 3211:
case 553:
case 3421:
case 3187:
case 2879:
case 2419:
case 178:
case 1279:
case 2937:
case 2631:
case 3126:
case 3796:
case 906:
case 3867:
case 3442:
case 4093:
case 2840:
case 302:
case 1512:
case 2026:
case 2822:
case 1810:
case 115:
case 506:
case 374:
case 1978:
case 2884:
case 2890:
case 1913:
case 1467:
case 239:
case 3758:
case 1880:
case 361:
case 1061:
case 684:
case 1918:
case 1226:
case 4065:
case 1883:
case 2947:
case 834:
case 2010:
case 3757:
case 481:
case 1004:
case 2097:
case 1949:
case 1017:
case 854:
case 1046:
case 3880:
case 1454:
case 2462:
case 759:
case 3335:
case 2958:
case 1354:
case 1281:
case 2371:
case 2748:
case 1729:
case 1203:
case 3226:
case 864:
case 1965:
case 1171:
case 3443:
case 209:
case 1574:
case 1044:
case 3137:
case 2249:
case 1873:
case 1511:
case 320:
case 517:
case 275:
case 632:
case 1116:
case 3924:
case 2235:
case 829:
case 1056:
case 925:
case 2537:
case 408:
case 749:
case 3053:
case 1701:
case 2863:
case 3973:
case 3332:
case 2727:
case 3346:
case 809:
case 3414:
case 3996:
case 2450:
case 1564:
case 152:
case 2970:
case 2721:
case 447:
case 3270:
case 2264:
case 1385:
case 1045:
case 1288:
case 1479:
case 859:
case 708:
case 780:
case 2357:
case 598:
case 2546:
case 202:
case 3618:
case 431:
case 4075:
case 621:
case 3688:
case 3220:
case 3575:
case 2807:
case 3395:
case 2586:
case 278:
case 3127:
case 3921:
case 1831:
case 1265:
case 1155:
case 3499:
case 687:
case 64:
case 2990:
case 926:
case 1176:
case 2786:
case 2201:
case 3257:
case 2562:
case 1312:
case 1891:
case 4024:
case 2594:
case 1135:
case 2394:
case 4026:
case 2047:
case 2704:
case 1792:
case 1035:
case 2636:
case 3379:
case 3778:
case 1038:
case 1101:
case 2835:
case 1074:
case 2185:
case 3905:
case 3812:
case 1853:
case 324:
case 1183:
case 1468:
case 856:
case 2056:
case 2250:
case 2966:
case 3013:
case 1621:
case 567:
case 171:
case 3735:
case 1224:
case 194:
case 2310:
case 666:
case 137:
case 2699:
case 2072:
case 728:
case 2409:
case 1187:
case 988:
case 1040:
case 2261:
case 1892:
case 1547:
case 2644:
case 1422:
case 605:
case 2245:
case 3572:
case 1957:
case 3835:
case 3940:
case 3388:
case 2965:
case 3799:
case 3007:
case 2402:
case 802:
case 2579:
case 2872:
case 1841:
case 2897:
case 1003:
case 960:
case 3409:
case 1637:
case 1805:
case 2254:
case 3824:
case 2599:
case 3233:
case 570:
case 1407:
case 96:
case 1059:
case 903:
case 2717:
case 1707:
case 3546:
case 2381:
case 2229:
case 3583:
case 4040:
case 3263:
case 345:
case 59:
case 2115:
case 2393:
case 2300:
case 3854:
case 2090:
case 4:
case 3308:
case 3051:
case 3552:
case 307:
case 2390:
case 3282:
case 701:
case 2564:
case 790:
case 2935:
case 2901:
case 884:
case 333:
case 1966:
case 2314:
case 81:
case 2752:
case 3655:
case 3450:
case 3587:
case 1375:
case 874:
case 4041:
case 3677:
case 1027:
case 3251:
case 2218:
case 3669:
case 4084:
case 1369:
case 2714:
case 920:
case 3980:
case 2532:
case 3949:
case 461:
case 3845:
case 3736:
case 2798:
case 429:
case 1983:
case 3387:
case 3223:
case 47:
case 3368:
case 3504:
case 1655:
case 2503:
case 136:
case 2268:
case 1643:
case 454:
case 1526:
case 3268:
case 918:
case 1386:
case 10:
case 3780:
case 2973:
case 3074:
case 3859:
case 3891:
case 1266:
case 1583:
case 189:
case 277:
case 740:
case 528:
case 1291:
case 2934:
case 2713:
case 716:
case 3866:
case 3569:
case 3931:
case 1501:
case 2482:
case 1585:
case 2868:
case 764:
case 3689:
case 738:
case 132:
case 3034:
case 916:
case 1523:
case 1416:
case 1616:
case 2074:
case 3069:
case 2900:
case 42:
case 1811:
case 2584:
case 935:
case 3327:
case 1181:
case 1691:
case 3028:
case 390:
case 631:
case 2691:
case 1605:
case 2127:
case 2865:
case 3800:
case 319:
case 3567:
case 1875:
case 448:
case 950:
case 1516:
case 2334:
case 3005:
case 371:
case 346:
case 237:
case 3057:
case 2820:
case 1370:
case 1247:
case 1190:
case 1507:
case 2497:
case 1558:
case 1696:
case 2738:
case 3082:
case 163:
case 469:
case 3776:
case 2452:
case 2700:
case 3179:
case 283:
case 2067:
case 908:
case 1205:
case 3079:
case 1297:
case 379:
case 3004:
case 3228:
case 991:
case 3833:
case 2645:
case 3814:
case 2213:
case 2253:
case 722:
case 3299:
case 609:
case 2427:
case 3174:
case 3670:
case 2878:
case 686:
case 800:
case 72:
case 455:
case 545:
case 2211:
case 2403:
case 66:
case 2305:
case 2000:
case 3243:
case 901:
case 2976:
case 902:
case 3790:
case 891:
case 450:
case 1188:
case 623:
case 705:
case 1021:
case 1742:
case 568:
case 24:
case 3302:
case 3922:
case 751:
case 2883:
case 3142:
case 1800:
case 2999:
case 1081:
case 26:
case 719:
case 459:
case 3737:
case 3482:
case 3413:
case 3895:
case 2730:
case 1162:
case 3701:
case 3264:
case 2797:
case 98:
case 3151:
case 3579:
case 3064:
case 596:
case 162:
case 3512:
case 3547:
case 2136:
case 1058:
case 243:
case 3022:
case 1212:
case 316:
case 2088:
case 2309:
case 1725:
case 3631:
case 1994:
case 1687:
case 2605:
case 887:
case 3919:
case 2416:
case 1002:
case 4060:
case 268:
case 1785:
case 12:
case 3247:
case 2368:
case 1009:
case 1456:
case 368:
case 1607:
case 1204:
case 2921:
case 1540:
case 1255:
case 3072:
case 1382:
case 1207:
case 157:
case 3505:
case 1489:
case 3262:
case 1227:
case 2843:
case 2326:
case 1196:
case 2573:
case 1734:
case 3829:
case 3169:
case 3437:
case 1075:
case 3196:
case 351:
case 2480:
case 234:
case 1248:
case 3354:
case 3819:
case 2041:
case 3896:
case 1912:
case 296:
case 1699:
case 2814:
case 2004:
case 2663:
case 2148:
case 4057:
case 1401:
case 3527:
case 2544:
case 3120:
case 2414:
case 1240:
case 411:
case 3747:
case 291:
case 3938:
case 3036:
case 604:
case 2574:
case 3444:
case 1682:
case 442:
case 2957:
case 995:
case 326:
case 2466:
case 1148:
case 3542:
case 2589:
case 3944:
case 33:
case 456:
case 4082:
case 967:
case 2379:
case 2616:
case 704:
case 1612:
case 2940:
case 703:
case 118:
case 2643:
case 518:
case 2790:
case 2871:
case 1774:
case 502:
case 2905:
case 3906:
case 116:
case 146:
case 3110:
case 1789:
case 1048:
case 144:
case 3870:
case 1383:
case 3040:
case 3754:
case 1791:
case 700:
case 34:
case 1460:
case 3448:
case 1001:
case 2732:
case 3864:
case 2370:
case 1856:
case 1159:
case 2063:
case 2755:
case 3000:
case 3431:
case 2398:
case 2824:
case 1590:
case 2781:
case 3373:
case 2055:
case 593:
case 4025:
case 2437:
case 2547:
case 1730:
case 2676:
case 2282:
case 3456:
case 3883:
case 2632:
case 2628:
case 2197:
case 1394:
case 1469:
case 279:
case 3303:
case 1322:
case 1825:
case 930:
case 2743:
case 1522:
case 833:
case 3982:
case 2592:
case 2019:
case 1355:
case 2985:
case 1488:
case 551:
case 3985:
case 2810:
case 2596:
case 1228:
case 2972:
case 1477:
case 3489:
case 624:
case 3741:
case 2346:
case 1764:
case 1412:
case 2077:
case 2091:
case 314:
case 2207:
case 2355:
case 3035:
case 1260:
case 3636:
case 2428:
case 1342:
case 3092:
case 2923:
case 2152:
case 1459:
case 2386:
case 552:
case 755:
case 3730:
case 3649:
case 2777:
case 341:
case 1750:
case 4005:
case 724:
case 2382:
case 3478:
case 337:
case 3767:
case 2907:
case 1435:
case 3216:
case 3822:
case 2703:
case 2155:
case 3748:
case 4076:
case 2139:
case 1539:
case 3947:
case 422:
case 1238:
case 3360:
case 2561:
case 3272:
case 709:
case 1690:
case 3986:
case 3410:
case 1911:
case 3313:
case 1070:
case 2271:
case 1565:
case 2108:
case 2098:
case 336:
case 3984:
case 3349:
case 3141:
case 3175:
case 3348:
case 937:
case 1915:
case 941:
case 3813:
case 3517:
case 1236:
case 3666:
case 15:
case 1692:
case 2971:
case 377:
case 3320:
case 2306:
case 1962:
case 1808:
case 2568:
case 3887:
case 1577:
case 564:
case 3095:
case 2344:
case 1868:
case 1904:
case 2697:
case 2988:
case 2438:
case 1095:
case 2352:
case 3793:
case 2917:
case 3358:
case 2811:
case 260:
case 2362:
case 3729:
case 3659:
case 3828:
case 3455:
case 2302:
case 3096:
case 497:
case 3744:
case 3199:
case 3312:
case 1169:
case 886:
case 3375:
case 1650:
case 4033:
case 1199:
case 3882:
case 56:
case 2443:
case 818:
case 2733:
case 642:
case 810:
case 1769:
case 1065:
case 840:
case 1961:
case 2430:
case 851:
case 3058:
case 207:
case 676:
case 1959:
case 472:
case 610:
case 3043:
case 3858:
case 566:
case 2243:
case 3165:
case 3103:
case 3277:
case 1447:
case 87:
case 1575:
case 1096:
case 1610:
case 2121:
case 2298:
case 2514:
case 1066:
case 3256:
case 2347:
case 2845:
case 2125:
case 1323:
case 2671:
case 1285:
case 2650:
case 3782:
case 2425:
case 1253:
case 392:
case 1126:
case 3163:
case 4068:
case 2266:
case 3844:
case 618:
case 2882:
case 305:
case 458:
case 1632:
case 3100:
case 252:
case 2236:
case 813:
case 3610:
case 2603:
case 1042:
case 2773:
case 1458:
case 2307:
case 362:
case 3350:
case 1103:
case 1327:
case 648:
case 1695:
case 306:
case 2479:
case 2893:
case 982:
case 3405:
case 419:
case 2265:
case 3810:
case 1197:
case 2012:
case 680:
case 1874:
case 600:
case 2283:
case 3939:
case 3827:
case 3342:
case 63:
case 2866:
case 3106:
case 3558:
case 1251:
case 538:
case 1277:
case 258:
case 3204:
case 3029:
case 669:
case 3161:
case 919:
case 3231:
case 2920:
case 21:
case 661:
case 4039:
case 655:
case 232:
case 2338:
case 2502:
case 1681:
case 2215:
case 1193:
case 2983:
case 1497:
case 2812:
case 2417:
case 1751:
case 746:
case 1779:
case 334:
case 1080:
case 1878:
case 3795:
case 1614:
case 1859:
case 1835:
case 756:
case 1296:
case 309:
case 462:
case 1487:
case 50:
case 574:
case 3380:
case 1134:
case 353:
case 1439:
case 3699:
case 2142:
case 1806:
case 494:
case 2180:
case 2528:
case 1666:
case 3122:
case 1613:
case 3674:
case 3325:
case 1363:
case 3260:
case 690:
case 2956:
case 793:
case 2039:
case 3117:
case 1510:
case 3068:
case 3038:
case 485:
case 3:
case 2591:
case 870:
case 758:
case 1766:
case 366:
case 113:
case 3663:
case 1759:
case 1941:
case 3113:
case 417:
case 1857:
case 3562:
case 1316:
case 3794:
case 2783:
case 2214:
case 1034:
case 2363:
case 1191:
case 3502:
case 2044:
case 2698:
case 1008:
case 1917:
case 2802:
case 956:
case 387:
case 3892:
case 104:
case 1502:
case 3563:
case 3217:
case 2297:
case 1589:
case 205:
case 3633:
case 3685:
case 2540:
case 1592:
case 1419:
case 1967:
case 1029:
case 2335:
case 1124:
case 1336:
case 3030:
case 2847:
case 2827:
case 263:
case 3726:
case 218:
case 2441:
case 2959:
case 2188:
case 535:
case 2982:
case 1954:
case 2471:
case 238:
case 1736:
case 2193:
case 488:
case 1077:
case 1314:
case 539:
case 921:
case 1889:
case 1755:
case 2978:
case 295:
case 1798:
case 543:
case 986:
case 2170:
case 2160:
case 1861:
case 1515:
case 1091:
case 3301:
case 1145:
case 844:
case 370:
case 388:
case 1139:
case 2301:
case 3132:
case 3983:
case 1728:
case 3958:
case 2290:
case 3665:
case 2557:
case 2624:
case 2932:
case 217:
case 3559:
case 1284:
case 3182:
case 3658:
case 2293:
case 987:
case 2095:
case 420:
case 3102:
case 1366:
case 1267:
case 2618:
case 2426:
case 822:
case 767:
case 1970:
case 2182:
case 3267:
case 2429:
case 2459:
case 880:
case 204:
case 777:
case 2684:
case 61:
case 3613:
case 1969:
case 1556:
case 931:
case 2626:
case 11:
case 882:
case 2648:
case 358:
case 2194:
case 2322:
case 1457:
case 2572:
case 2623:
case 3816:
case 2764:
case 117:
case 541:
case 2421:
case 2873:
case 428:
case 715:
case 3764:
case 1313:
case 4036:
case 214:
case 2418:
case 1703:
case 160:
case 2875:
case 3306:
case 520:
case 1480:
case 1388:
case 2583:
case 652:
case 3164:
case 2075:
case 464:
case 3249:
case 386:
case 801:
case 2922:
case 2446:
case 1821:
case 2750:
case 3683:
case 1471:
case 286:
case 1274:
case 185:
case 559:
case 1718:
case 53:
case 1221:
case 261:
case 2548:
case 3150:
case 3731:
case 3850:
case 3255:
case 323:
case 3293:
case 60:
case 2682:
case 3533:
case 93:
case 3652:
case 816:
case 2410:
case 3305:
case 4050:
case 670:
case 2066:
case 212:
case 225:
case 2192:
case 3881:
case 2842:
case 150:
case 1057:
case 338:
case 2690:
case 4049:
case 1872:
case 560:
case 1141:
case 381:
case 3418:
case 2181:
case 617:
case 1055:
case 1123:
case 1921:
case 3451:
case 1739:
case 90:
case 3206:
case 2694:
case 717:
case 2251:
case 2719:
case 3155:
case 271:
case 2415:
case 2926:
case 742:
case 896:
case 2859:
case 3838:
case 460:
case 3314:
case 3390:
case 2541:
case 857:
case 2456:
case 1581:
case 3577:
case 3913:
case 1743:
case 3394:
case 905:
case 1956:
case 629:
case 1851:
case 407:
case 3755:
case 3617:
case 1900:
case 1411:
case 1194:
case 3463:
case 1710:
case 1137:
case 1163:
case 2955:
case 3025:
case 350:
case 221:
case 119:
case 449:
case 1405:
case 2473:
case 2023:
case 1840:
case 3210:
case 3696:
case 347:
case 3411:
case 614:
case 971:
case 940:
case 1598:
case 3798:
case 3964:
case 1476:
case 1976:
case 3240:
case 831:
case 2754:
case 932:
case 1114:
case 2558:
case 2112:
case 1559:
case 2598:
case 1270:
case 434:
case 394:
case 2110:
case 1428:
case 1828:
case 1953:
case 3278:
case 2082:
case 367:
case 3554:
case 3033:
case 28:
case 108:
case 3145:
case 3490:
case 1603:
case 3454:
case 3885:
case 2555:
case 2267:
case 1215:
case 1186:
case 4062:
case 1995:
case 771:
case 1053:
case 2641:
case 2145:
case 2295:
case 3643:
case 697:
case 3138:
case 2964:
case 3557:
case 3974:
case 2031:
case 1533:
case 3093:
case 3344:
case 1225:
case 114:
case 3682:
case 3419:
case 959:
case 1782:
case 3826:
case 3954:
case 2137:
case 1817:
case 2677:
case 2487:
case 2609:
case 1311:
case 3991:
case 2392:
case 201:
case 805:
case 3144:
case 292:
case 2340:
case 4069:
case 2519:
case 4089:
case 487:
case 1503:
case 2963:
case 2936:
case 2723:
case 2374:
case 220:
case 1982:
case 74:
case 1513:
case 2246:
case 3076:
case 1596:
case 3353:
case 1272:
case 3170:
case 297:
case 812:
case 1495:
case 2902:
case 3515:
case 2099:
case 1899:
case 2337:
case 2107:
case 2348:
case 1898:
case 3090:
case 904:
case 1329:
case 9:
case 2138:
case 2887:
case 443:
case 3472:
case 942:
case 503:
case 2848:
case 3694:
case 1833:
case 3176:
case 3158:
case 3186:
case 3271:
case 426:
case 3888:
case 3396:
case 1328:
case 399:
case 1007:
case 265:
case 1722:
case 3290:
case 2711:
case 2179:
case 2396:
case 3166:
case 953:
case 2491:
case 899:
case 2448:
case 1628:
case 2604:
case 3622:
case 3990:
case 433:
case 2576:
case 1752:
case 482:
case 1855:
case 2083:
case 3801:
case 1935:
case 1591:
case 989:
case 1723:
case 1624:
case 558:
case 2171:
case 1500:
case 2566:
case 1250:
case 2361:
case 603:
case 3564:
case 547:
case 3236:
case 282:
case 211:
case 2980:
case 1697:
case 1567:
case 792:
case 3697:
case 608:
case 385:
case 1110:
case 1683:
case 667:
case 256:
case 1799:
case 2542:
case 2373:
case 3656:
case 1269:
case 2928:
case 2198:
case 3809:
case 70:
case 3988:
case 2782:
case 1233:
case 668:
case 1594:
case 3823:
case 2554:
case 3330:
case 3017:
case 2461:
case 1786:
case 486:
case 3953:
case 799:
case 2909:
case 1958:
case 2672:
case 2649:
case 1015:
case 287:
case 2247:
case 2424:
case 84:
case 3386:
case 1404:
case 2612:
case 3710:
case 823:
case 2383:
case 2321:
case 832:
case 2758:
case 1292:
case 2262:
case 990:
case 571:
case 3771:
case 3899:
case 3632:
case 1896:
case 3904:
case 3425:
case 3664:
case 1118:
case 2683:
case 1175:
case 3067:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1647813602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,];
var gg_b = "1647813602/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
