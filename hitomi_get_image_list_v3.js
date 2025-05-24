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
case 1953:
case 1240:
case 1004:
case 3431:
case 2840:
case 3532:
case 3085:
case 1278:
case 3429:
case 1940:
case 2783:
case 3122:
case 17:
case 3237:
case 883:
case 2837:
case 1085:
case 1387:
case 3764:
case 66:
case 2006:
case 1429:
case 3940:
case 1122:
case 37:
case 3253:
case 2969:
case 2312:
case 3953:
case 2766:
case 3240:
case 303:
case 274:
case 1503:
case 3004:
case 629:
case 1532:
case 1611:
case 715:
case 1869:
case 451:
case 3491:
case 758:
case 3592:
case 1872:
case 2616:
case 781:
case 2272:
case 3323:
case 109:
case 3434:
case 1001:
case 3297:
case 2972:
case 3614:
case 340:
case 2647:
case 1434:
case 2655:
case 575:
case 3020:
case 889:
case 2609:
case 588:
case 2410:
case 623:
case 1491:
case 3872:
case 4012:
case 1997:
case 1323:
case 638:
case 1871:
case 3199:
case 3124:
case 441:
case 463:
case 748:
case 195:
case 847:
case 1033:
case 3980:
case 1002:
case 1045:
case 395:
case 3033:
case 150:
case 1057:
case 1980:
case 952:
case 1309:
case 2735:
case 3045:
case 3002:
case 3762:
case 83:
case 2880:
case 3316:
case 3871:
case 1280:
case 1124:
case 2510:
case 2623:
case 913:
case 3612:
case 634:
case 1225:
case 2974:
case 469:
case 3779:
case 2008:
case 3276:
case 3403:
case 3390:
case 584:
case 3121:
case 2768:
case 1874:
case 332:
case 3100:
case 1093:
case 1925:
case 930:
case 3874:
case 1594:
case 2687:
case 569:
case 2795:
case 132:
case 1100:
case 2167:
case 3925:
case 2498:
case 1612:
case 484:
case 1139:
case 2876:
case 3225:
case 919:
case 211:
case 1432:
case 754:
case 605:
case 767:
case 988:
case 2399:
case 975:
case 2130:
case 259:
case 3781:
case 951:
case 2501:
case 2445:
case 2613:
case 1114:
case 2155:
case 397:
case 4000:
case 2748:
case 586:
case 3038:
case 2433:
case 2147:
case 814:
case 442:
case 3077:
case 2457:
case 197:
case 1038:
case 756:
case 1851:
case 486:
case 2289:
case 765:
case 1111:
case 1519:
case 607:
case 1408:
case 2504:
case 4024:
case 2856:
case 2339:
case 3215:
case 1367:
case 212:
case 3784:
case 2493:
case 2989:
case 3854:
case 1215:
case 1784:
case 1098:
case 2763:
case 1854:
case 2815:
case 3519:
case 3759:
case 2003:
case 331:
case 2032:
case 1915:
case 3889:
case 3705:
case 2404:
case 1096:
case 99:
case 3973:
case 1508:
case 530:
case 1112:
case 3273:
case 866:
case 2667:
case 1600:
case 92:
case 818:
case 2593:
case 2029:
case 2788:
case 1406:
case 1273:
case 2094:
case 3600:
case 1258:
case 2485:
case 2858:
case 430:
case 2031:
case 3741:
case 3096:
case 3508:
case 984:
case 1807:
case 552:
case 963:
case 779:
case 3849:
case 1624:
case 1260:
case 3852:
case 1036:
case 820:
case 2207:
case 513:
case 2533:
case 1960:
case 2401:
case 1744:
case 2675:
case 2118:
case 2502:
case 452:
case 2949:
case 2626:
case 855:
case 200:
case 3313:
case 2952:
case 2034:
case 3807:
case 413:
case 1849:
case 3699:
case 2746:
case 2249:
case 746:
case 2141:
case 2549:
case 147:
case 895:
case 2957:
case 2366:
case 2552:
case 234:
case 2712:
case 3364:
case 1695:
case 825:
case 3668:
case 3845:
case 422:
case 2245:
case 2202:
case 1833:
case 1364:
case 2233:
case 3695:
case 1668:
case 1802:
case 1845:
case 2507:
case 2933:
case 4027:
case 611:
case 522:
case 1650:
case 3361:
case 1723:
case 368:
case 685:
case 3146:
case 1415:
case 1643:
case 1573:
case 1718:
case 2293:
case 1117:
case 504:
case 95:
case 3558:
case 3643:
case 2:
case 4083:
case 3718:
case 3573:
case 1893:
case 1208:
case 3650:
case 1361:
case 1456:
case 3723:
case 2489:
case 116:
case 435:
case 2327:
case 2662:
case 2025:
case 2808:
case 2993:
case 2985:
case 383:
case 87:
case 3716:
case 1069:
case 3556:
case 3219:
case 3362:
case 2335:
case 803:
case 3919:
case 760:
case 1473:
case 2806:
case 2343:
case 2714:
case 2285:
case 1148:
case 3709:
case 1747:
case 2053:
case 2078:
case 293:
case 2904:
case 94:
case 2204:
case 2040:
case 3906:
case 1804:
case 3069:
case 2181:
case 1362:
case 906:
case 1790:
case 1379:
case 3072:
case 1666:
case 164:
case 2449:
case 2142:
case 2105:
case 3460:
case 796:
case 3683:
case 3820:
case 508:
case 1801:
case 1683:
case 2184:
case 372:
case 2664:
case 1163:
case 1820:
case 2368:
case 299:
case 2201:
case 3379:
case 1072:
case 3186:
case 2920:
case 364:
case 408:
case 1929:
case 3440:
case 1646:
case 724:
case 2469:
case 904:
case 2682:
case 3143:
case 3453:
case 1726:
case 1437:
case 794:
case 2073:
case 2996:
case 2348:
case 2574:
case 3931:
case 2644:
case 1775:
case 3437:
case 1135:
case 1478:
case 4086:
case 3576:
case 3994:
case 3381:
case 318:
case 2724:
case 3231:
case 1525:
case 2296:
case 661:
case 3305:
case 3007:
case 190:
case 1291:
case 3359:
case 1810:
case 1934:
case 922:
case 1497:
case 280:
case 2363:
case 702:
case 120:
case 1688:
case 3767:
case 2721:
case 3234:
case 3384:
case 4048:
case 3991:
case 320:
case 3688:
case 3049:
case 155:
case 1305:
case 1007:
case 2739:
case 2060:
case 390:
case 3580:
case 2236:
case 1359:
case 2386:
case 3052:
case 2571:
case 2641:
case 591:
case 3166:
case 2892:
case 4046:
case 2938:
case 207:
case 2238:
case 1663:
case 2684:
case 2388:
case 612:
case 1838:
case 21:
case 827:
case 3992:
case 3597:
case 506:
case 2722:
case 908:
case 2471:
case 2642:
case 570:
case 1166:
case 3051:
case 2659:
case 897:
case 1686:
case 421:
case 3480:
case 3425:
case 437:
case 3540:
case 1476:
case 3670:
case 2161:
case 3728:
case 1382:
case 3648:
case 4088:
case 3713:
case 1898:
case 1054:
case 2317:
case 1932:
case 1648:
case 3537:
case 1865:
case 3898:
case 1713:
case 1578:
case 710:
case 2474:
case 3054:
case 2265:
case 1425:
case 687:
case 1540:
case 3203:
case 3382:
case 739:
case 1011:
case 3827:
case 3308:
case 3261:
case 617:
case 450:
case 4057:
case 60:
case 3198:
case 2606:
case 3467:
case 202:
case 1797:
case 525:
case 3961:
case 3165:
case 892:
case 2393:
case 1467:
case 2421:
case 4002:
case 4045:
case 3685:
case 1827:
case 1308:
case 2103:
case 1604:
case 2439:
case 163:
case 425:
case 2132:
case 141:
case 2619:
case 369:
case 679:
case 32:
case 2009:
case 1737:
case 1426:
case 294:
case 2966:
case 2357:
case 3475:
case 12:
case 3737:
case 3426:
case 804:
case 2345:
case 1513:
case 1620:
case 2864:
case 1883:
case 1264:
case 3177:
case 2333:
case 3014:
case 1138:
case 2499:
case 2424:
case 2192:
case 3866:
case 1740:
case 646:
case 2016:
case 1528:
case 532:
case 2995:
case 2023:
case 3428:
case 3110:
case 736:
case 57:
case 1136:
case 2879:
case 3725:
case 3645:
case 1895:
case 3575:
case 1526:
case 1979:
case 3413:
case 2774:
case 1602:
case 1645:
case 2134:
case 3526:
case 1633:
case 3979:
case 2268:
case 1413:
case 3776:
case 2968:
case 931:
case 656:
case 1110:
case 2524:
case 2599:
case 2191:
case 1725:
case 1196:
case 375:
case 1780:
case 2943:
case 927:
case 1012:
case 1850:
case 3319:
case 3262:
case 3962:
case 71:
case 3693:
case 2235:
case 1306:
case 440:
case 2243:
case 2950:
case 1835:
case 2087:
case 2385:
case 2521:
case 2129:
case 3306:
case 4001:
case 2500:
case 298:
case 4020:
case 2862:
case 2608:
case 3196:
case 2539:
case 2131:
case 175:
case 3780:
case 2304:
case 233:
case 188:
case 409:
case 2771:
case 3012:
case 3850:
case 1262:
case 3242:
case 1391:
case 1984:
case 3886:
case 2310:
case 85:
case 3756:
case 119:
case 3547:
case 1418:
case 3959:
case 1284:
case 1555:
case 2514:
case 1120:
case 3905:
case 2754:
case 3509:
case 7:
case 3638:
case 3334:
case 3120:
case 1942:
case 1905:
case 3391:
case 2859:
case 2336:
case 1886:
case 2286:
case 1516:
case 2805:
case 2789:
case 2028:
case 2842:
case 3423:
case 2119:
case 2632:
case 3870:
case 113:
case 2751:
case 1104:
case 2881:
case 3185:
case 1487:
case 152:
case 1698:
case 3022:
case 1394:
case 3665:
case 1185:
case 2248:
case 995:
case 2106:
case 3698:
case 3329:
case 3981:
case 1848:
case 1022:
case 3394:
case 925:
case 313:
case 3104:
case 2948:
case 4036:
case 377:
case 654:
case 2917:
case 891:
case 3039:
case 2246:
case 186:
case 3944:
case 1303:
case 2631:
case 1982:
case 497:
case 296:
case 2946:
case 2398:
case 2217:
case 2629:
case 1587:
case 3982:
case 3817:
case 1244:
case 1000:
case 2844:
case 342:
case 2067:
case 76:
case 2365:
case 3587:
case 4077:
case 1039:
case 2707:
case 870:
case 201:
case 644:
case 909:
case 597:
case 3490:
case 386:
case 1944:
case 1696:
case 3282:
case 2988:
case 84:
case 3636:
case 1610:
case 1523:
case 3024:
case 3241:
case 681:
case 3941:
case 1758:
case 3447:
case 1409:
case 260:
case 531:
case 2288:
case 1773:
case 3455:
case 1941:
case 1157:
case 837:
case 793:
case 3409:
case 3102:
case 3518:
case 723:
case 3523:
case 3610:
case 1024:
case 3392:
case 1099:
case 1241:
case 3107:
case 1149:
case 1442:
case 1708:
case 1459:
case 265:
case 1068:
case 3095:
case 712:
case 2793:
case 3484:
case 2463:
case 2588:
case 698:
case 583:
case 1218:
case 1397:
case 1923:
case 633:
case 3149:
case 3442:
case 3405:
case 3671:
case 2160:
case 3152:
case 4069:
case 1918:
case 628:
case 3459:
case 3582:
case 2625:
case 4072:
case 759:
case 1340:
case 3481:
case 108:
case 2733:
case 3043:
case 1544:
case 1378:
case 2158:
case 2173:
case 2702:
case 1353:
case 2517:
case 875:
case 2757:
case 3544:
case 3378:
case 1337:
case 1035:
case 3674:
case 610:
case 3353:
case 2369:
case 3340:
case 639:
case 308:
case 2676:
case 1987:
case 1050:
case 2570:
case 3669:
case 1027:
case 392:
case 3376:
case 279:
case 2061:
case 971:
case 3290:
case 4071:
case 547:
case 3990:
case 1444:
case 2701:
case 43:
case 322:
case 2548:
case 2115:
case 1154:
case 2653:
case 1990:
case 122:
case 841:
case 2637:
case 2890:
case 447:
case 1669:
case 3325:
case 1811:
case 3027:
case 53:
case 776:
case 1482:
case 1376:
case 2211:
case 990:
case 1581:
case 2156:
case 1290:
case 1947:
case 3909:
case 3066:
case 1559:
case 1151:
case 273:
case 761:
case 1216:
case 3230:
case 2704:
case 2816:
case 1542:
case 2847:
case 3584:
case 2064:
case 3255:
case 3814:
case 3930:
case 1916:
case 3209:
case 1247:
case 1584:
case 2214:
case 1255:
case 2855:
case 3916:
case 89:
case 516:
case 1209:
case 3247:
case 3947:
case 3719:
case 104:
case 2914:
case 2830:
case 3441:
case 966:
case 3542:
case 2921:
case 1839:
case 1356:
case 989:
case 1461:
case 281:
case 3046:
case 842:
case 2900:
case 306:
case 1821:
case 3315:
case 3174:
case 1267:
case 191:
case 370:
case 2044:
case 2221:
case 2354:
case 3267:
case 1174:
case 2673:
case 2658:
case 391:
case 3800:
case 3356:
case 964:
case 4051:
case 2082:
case 957:
case 1791:
case 106:
case 2125:
case 3731:
case 2041:
case 2224:
case 2180:
case 3652:
case 3579:
case 3171:
case 983:
case 626:
case 3729:
case 2875:
case 3226:
case 2999:
case 1088:
case 1729:
case 762:
case 34:
case 4054:
case 2826:
case 3464:
case 1731:
case 215:
case 3975:
case 1579:
case 1926:
case 3824:
case 601:
case 244:
case 2466:
case 916:
case 3172:
case 1086:
case 1913:
case 1360:
case 3732:
case 2307:
case 2005:
case 2042:
case 1564:
case 1213:
case 2583:
case 819:
case 2197:
case 15:
case 1928:
case 3564:
case 2084:
case 3213:
case 1063:
case 35:
case 3928:
case 1479:
case 466:
case 2566:
case 1703:
case 711:
case 1651:
case 2349:
case 471:
case 1689:
case 2527:
case 455:
case 1169:
case 520:
case 3654:
case 3373:
case 93:
case 877:
case 1822:
case 1048:
case 2153:
case 571:
case 1654:
case 2615:
case 1358:
case 2435:
case 2178:
case 2443:
case 3822:
case 490:
case 3689:
case 1792:
case 4052:
case 706:
case 1630:
case 3436:
case 683:
case 2997:
case 3972:
case 2614:
case 2434:
case 2318:
case 1609:
case 3647:
case 770:
case 1897:
case 3577:
case 1972:
case 3113:
case 2001:
case 498:
case 1647:
case 3538:
case 791:
case 2020:
case 1577:
case 2872:
case 3630:
case 433:
case 209:
case 901:
case 1272:
case 689:
case 174:
case 2503:
case 1269:
case 2937:
case 893:
case 2532:
case 737:
case 1690:
case 3496:
case 2431:
case 3840:
case 539:
case 1598:
case 3878:
case 3853:
case 2085:
case 2387:
case 3565:
case 2122:
case 823:
case 1969:
case 2494:
case 162:
case 2429:
case 3783:
case 1878:
case 1853:
case 410:
case 27:
case 3969:
case 74:
case 2278:
case 2240:
case 657:
case 374:
case 2978:
case 664:
case 3690:
case 1496:
case 111:
case 2612:
case 2139:
case 3596:
case 3008:
case 424:
case 4030:
case 8:
case 58:
case 494:
case 2121:
case 2976:
case 1687:
case 1167:
case 1498:
case 4055:
case 63:
case 3465:
case 232:
case 4047:
case 3687:
case 2874:
case 2925:
case 3498:
case 1465:
case 48:
case 2225:
case 1825:
case 3311:
case 2330:
case 385:
case 616:
case 1750:
case 2591:
case 378:
case 1623:
case 1510:
case 1175:
case 2355:
case 2057:
case 3477:
case 1618:
case 1735:
case 3126:
case 2033:
case 3314:
case 2002:
case 2347:
case 834:
case 1971:
case 3880:
case 1271:
case 2316:
case 2762:
case 225:
case 1536:
case 3510:
case 3623:
case 3786:
case 353:
case 645:
case 3190:
case 614:
case 1032:
case 1954:
case 2915:
case 3504:
case 3300:
case 312:
case 2098:
case 3493:
case 1254:
case 4026:
case 3321:
case 1815:
case 2854:
case 2506:
case 1763:
case 112:
case 2065:
case 836:
case 4075:
case 3585:
case 2622:
case 2956:
case 1321:
case 3815:
case 1989:
case 3763:
case 153:
case 2759:
case 3003:
case 2408:
case 1190:
case 2256:
case 2111:
case 3032:
case 560:
case 2889:
case 2742:
case 231:
case 1092:
case 2851:
case 3399:
case 426:
case 227:
case 187:
case 2781:
case 3130:
case 1951:
case 3402:
case 501:
case 1147:
case 3109:
case 297:
case 496:
case 3613:
case 3155:
case 3951:
case 1445:
case 1402:
case 3147:
case 998:
case 1433:
case 1520:
case 1155:
case 4067:
case 2077:
case 3092:
case 1324:
case 1399:
case 401:
case 1628:
case 933:
case 3116:
case 1130:
case 81:
case 1252:
case 349:
case 2849:
case 2782:
case 1249:
case 3207:
case 1746:
case 2010:
case 1626:
case 3533:
case 1557:
case 3907:
case 3118:
case 3502:
case 1952:
case 3675:
case 1034:
case 3626:
case 3717:
case 1907:
case 1118:
case 3952:
case 2744:
case 2699:
case 149:
case 1860:
case 880:
case 618:
case 2328:
case 3249:
case 3091:
case 924:
case 671:
case 361:
case 655:
case 2958:
case 2258:
case 1788:
case 1029:
case 1094:
case 2273:
case 1485:
case 1858:
case 98:
case 4013:
case 3788:
case 3094:
case 620:
case 1187:
case 3873:
case 3858:
case 735:
case 2741:
case 2096:
case 1404:
case 2508:
case 143:
case 4028:
case 2456:
case 473:
case 2361:
case 1662:
case 1993:
case 2146:
case 3454:
case 2074:
case 4064:
case 2117:
case 1:
case 2893:
case 40:
case 3144:
case 2415:
case 1454:
case 3293:
case 2635:
case 3:
case 2573:
case 2718:
case 695:
case 2558:
case 517:
case 2643:
case 2723:
case 3489:
case 3182:
case 1076:
case 954:
case 3327:
case 50:
case 3679:
case 3141:
case 3549:
case 3451:
case 3712:
case 479:
case 3366:
case 4061:
case 2071:
case 948:
case 334:
case 546:
case 23:
case 1202:
case 1245:
case 2845:
case 2802:
case 1233:
case 2364:
case 3257:
case 3383:
case 482:
case 3245:
case 3202:
case 2787:
case 3233:
case 579:
case 1257:
case 1957:
case 777:
case 305:
case 1451:
case 3945:
case 3902:
case 713:
case 1366:
case 134:
case 2072:
case 3551:
case 4062:
case 3711:
case 3452:
case 981:
case 3105:
case 289:
case 2460:
case 1407:
case 1920:
case 1220:
case 1368:
case 556:
case 1664:
case 3395:
case 2163:
case 3097:
case 67:
case 272:
case 36:
case 3368:
case 3201:
case 3664:
case 2379:
case 1159:
case 1711:
case 3901:
case 329:
case 603:
case 1142:
case 456:
case 3407:
case 3920:
case 1449:
case 264:
case 1204:
case 3350:
case 1819:
case 1661:
case 1181:
case 2627:
case 862:
case 1078:
case 640:
case 3335:
case 3037:
case 3806:
case 3714:
case 2473:
case 2206:
case 393:
case 1335:
case 2885:
case 1037:
case 3053:
case 2458:
case 1343:
case 1806:
case 2755:
case 1714:
case 3204:
case 609:
case 338:
case 944:
case 1350:
case 1985:
case 3661:
case 2170:
case 2069:
case 3589:
case 3040:
case 323:
case 2906:
case 448:
case 3210:
case 763:
case 1236:
case 255:
case 2342:
case 1641:
case 1571:
case 1179:
case 380:
case 3363:
case 2195:
case 876:
case 2767:
case 3834:
case 548:
case 2234:
case 2168:
case 3936:
case 2384:
case 3700:
case 1834:
case 2291:
case 1210:
case 3236:
case 3472:
case 2934:
case 3386:
case 4081:
case 3571:
case 2052:
case 3179:
case 917:
case 3469:
case 2896:
case 79:
case 3162:
case 3831:
case 1370:
case 1296:
case 4042:
case 1799:
case 4005:
case 90:
case 1348:
case 1574:
case 3894:
case 3829:
case 3073:
case 3058:
case 2453:
case 3348:
case 3574:
case 4084:
case 861:
case 2294:
case 2726:
case 2437:
case 467:
case 1469:
case 266:
case 2576:
case 2994:
case 1831:
case 2381:
case 1682:
case 3296:
case 784:
case 3799:
case 965:
case 2425:
case 3346:
case 3998:
case 336:
case 1965:
case 1056:
case 2540:
case 627:
case 697:
case 2344:
case 2713:
case 515:
case 2648:
case 2865:
case 2553:
case 3015:
case 3317:
case 3298:
case 1474:
case 2903:
case 853:
case 2054:
case 1317:
case 2932:
case 1298:
case 1998:
case 1803:
case 415:
case 1346:
case 136:
case 2232:
case 3965:
case 2127:
case 1681:
case 444:
case 2476:
case 214:
case 1572:
case 1471:
case 1642:
case 481:
case 3938:
case 2341:
case 245:
case 1659:
case 2686:
case 1277:
case 3388:
case 4044:
case 887:
case 3277:
case 1164:
case 2992:
case 1238:
case 581:
case 1388:
case 11:
case 859:
case 2051:
case 3471:
case 631:
case 956:
case 3605:
case 1938:
case 2292:
case 1192:
case 269:
case 961:
case 3769:
case 2528:
case 29:
case 1983:
case 4008:
case 1016:
case 2620:
case 2513:
case 2778:
case 394:
case 1283:
case 3966:
case 22:
case 3009:
case 1047:
case 2753:
case 1302:
case 622:
case 2601:
case 18:
case 2883:
case 2264:
case 3357:
case 3864:
case 3283:
case 873:
case 1009:
case 2426:
case 3345:
case 38:
case 3333:
case 1357:
case 2014:
case 1055:
case 3192:
case 2866:
case 3499:
case 3424:
case 124:
case 1030:
case 1103:
case 1772:
case 2827:
case 3090:
case 755:
case 1861:
case 1619:
case 771:
case 3606:
case 2467:
case 846:
case 1927:
case 1393:
case 1400:
case 1522:
case 1421:
case 585:
case 720:
case 102:
case 3927:
case 3393:
case 900:
case 578:
case 2685:
case 3421:
case 2797:
case 635:
case 3772:
case 1090:
case 3861:
case 3227:
case 790:
case 3943:
case 251:
case 745:
case 1608:
case 3250:
case 3935:
case 2262:
case 2319:
case 288:
case 714:
case 1422:
case 1194:
case 2693:
case 1129:
case 1500:
case 3194:
case 1235:
case 3521:
case 3129:
case 2835:
case 1950:
case 1385:
case 3500:
case 398:
case 2780:
case 3304:
case 987:
case 328:
case 3862:
case 3608:
case 3131:
case 2850:
case 3771:
case 3995:
case 2428:
case 1968:
case 953:
case 562:
case 1524:
case 1320:
case 2645:
case 2602:
case 1268:
case 2413:
case 3018:
case 1134:
case 3320:
case 2895:
case 3268:
case 4006:
case 3301:
case 1018:
case 2526:
case 1295:
case 2979:
case 2657:
case 2279:
case 1023:
case 1995:
case 339:
case 3968:
case 3599:
case 1879:
case 3191:
case 3412:
case 3119:
case 978:
case 3632:
case 3511:
case 449:
case 1270:
case 1948:
case 1396:
case 3603:
case 1248:
case 1970:
case 2665:
case 252:
case 3248:
case 3970:
case 400:
case 2329:
case 4034:
case 2698:
case 3106:
case 213:
case 1511:
case 1632:
case 2281:
case 3270:
case 1881:
case 3396:
case 476:
case 3948:
case 277:
case 2104:
case 747:
case 1336:
case 2886:
case 716:
case 3310:
case 2205:
case 1842:
case 1789:
case 1805:
case 1286:
case 768:
case 2259:
case 3692:
case 2516:
case 1013:
case 2959:
case 3884:
case 1986:
case 2547:
case 2418:
case 4029:
case 1884:
case 4094:
case 3986:
case 2334:
case 2101:
case 2638:
case 230:
case 543:
case 4031:
case 3859:
case 3336:
case 2984:
case 3789:
case 3805:
case 911:
case 3842:
case 3028:
case 3286:
case 1963:
case 1692:
case 3691:
case 2636:
case 2416:
case 1841:
case 3634:
case 1075:
case 412:
case 3338:
case 670:
case 3026:
case 2447:
case 360:
case 3075:
case 1634:
case 962:
case 1414:
case 553:
case 2888:
case 2102:
case 2145:
case 1288:
case 691:
case 2758:
case 1026:
case 160:
case 2409:
case 2523:
case 621:
case 512:
case 2392:
case 3246:
case 2760:
case 3749:
case 3882:
case 789:
case 3917:
case 3512:
case 2696:
case 3411:
case 2244:
case 2021:
case 3629:
case 587:
case 2000:
case 396:
case 1844:
case 3946:
case 242:
case 1629:
case 1217:
case 2587:
case 858:
case 772:
case 3844:
case 1246:
case 126:
case 1749:
case 757:
case 2332:
case 1917:
case 1631:
case 1512:
case 1108:
case 2282:
case 487:
case 2490:
case 907:
case 2481:
case 56:
case 1369:
case 1212:
case 3625:
case 2582:
case 3062:
case 2050:
case 3470:
case 156:
case 3733:
case 91:
case 529:
case 3448:
case 1517:
case 3173:
case 833:
case 2035:
case 3158:
case 3757:
case 3517:
case 1702:
case 3912:
case 1745:
case 2353:
case 2378:
case 499:
case 1158:
case 429:
case 2340:
case 3369:
case 3212:
case 1470:
case 208:
case 356:
case 1823:
case 593:
case 2918:
case 651:
case 365:
case 3486:
case 2223:
case 2397:
case 839:
case 2095:
case 2923:
case 4037:
case 1463:
case 1588:
case 523:
case 4053:
case 3463:
case 2068:
case 2442:
case 3823:
case 731:
case 2671:
case 3160:
case 2541:
case 2708:
case 423:
case 3680:
case 3079:
case 4076:
case 204:
case 663:
case 317:
case 2955:
case 1830:
case 5:
case 88:
case 2584:
case 3064:
case 2255:
case 1214:
case 30:
case 2209:
case 2814:
case 1064:
case 3214:
case 1847:
case 3809:
case 10:
case 2247:
case 2916:
case 3563:
case 2083:
case 1586:
case 2216:
case 894:
case 2719:
case 117:
case 2542:
case 235:
case 1704:
case 2672:
case 292:
case 3640:
case 69:
case 3570:
case 2669:
case 146:
case 2811:
case 1211:
case 2376:
case 434:
case 1156:
case 669:
case 505:
case 1911:
case 3701:
case 2444:
case 1701:
case 3911:
case 2154:
case 1653:
case 534:
case 405:
case 2325:
case 179:
case 3224:
case 3180:
case 2649:
case 1466:
case 2171:
case 2926:
case 1351:
case 1595:
case 3875:
case 3568:
case 2088:
case 3999:
case 642:
case 1483:
case 77:
case 3826:
case 1924:
case 2975:
case 1224:
case 1041:
case 938:
case 860:
case 2607:
case 3466:
case 2899:
case 1660:
case 4056:
case 3351:
case 3921:
case 3389:
case 3176:
case 1125:
case 3427:
case 2791:
case 1710:
case 206:
case 358:
case 2017:
case 3939:
case 2315:
case 3867:
case 3658:
case 1200:
case 3543:
case 291:
case 1939:
case 3354:
case 2267:
case 3673:
case 3535:
case 1867:
case 1221:
case 1044:
case 507:
case 2461:
case 181:
case 2356:
case 2839:
case 1921:
case 1389:
case 2562:
case 709:
case 1176:
case 3082:
case 3125:
case 51:
case 1900:
case 3710:
case 1736:
case 2792:
case 348:
case 3527:
case 2358:
case 1153:
case 1615:
case 1443:
case 1738:
case 3178:
case 3435:
case 3615:
case 2048:
case 2822:
case 795:
case 1656:
case 725:
case 2689:
case 148:
case 3081:
case 2462:
case 905:
case 2172:
case 1566:
case 2703:
case 1352:
case 1349:
case 3005:
case 1084:
case 3813:
case 3765:
case 4058:
case 1495:
case 3583:
case 3468:
case 2564:
case 9:
case 1813:
case 3798:
case 25:
case 3495:
case 2928:
case 1197:
case 2086:
case 3566:
case 2913:
case 354:
case 677:
case 3352:
case 1307:
case 1042:
case 1828:
case 2360:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748059201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,];
var gg_b = "1748059201/";

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
