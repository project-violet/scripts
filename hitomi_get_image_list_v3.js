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
case 3596:
case 228:
case 1344:
case 3386:
case 4013:
case 3842:
case 497:
case 1463:
case 859:
case 2024:
case 531:
case 640:
case 575:
case 3108:
case 1576:
case 2101:
case 3666:
case 180:
case 2466:
case 1954:
case 2935:
case 2192:
case 2357:
case 4:
case 2717:
case 3792:
case 2360:
case 1645:
case 2090:
case 3973:
case 3547:
case 2241:
case 4038:
case 1634:
case 313:
case 4021:
case 1782:
case 1347:
case 2670:
case 1838:
case 212:
case 2583:
case 3376:
case 666:
case 2944:
case 3037:
case 1490:
case 2168:
case 1957:
case 3161:
case 3045:
case 1210:
case 2761:
case 43:
case 1960:
case 3768:
case 3406:
case 3544:
case 659:
case 3114:
case 1586:
case 161:
case 2714:
case 840:
case 2354:
case 3300:
case 567:
case 1910:
case 2351:
case 3541:
case 2118:
case 3111:
case 2339:
case 2107:
case 3806:
case 4090:
case 760:
case 166:
case 2:
case 1016:
case 1659:
case 2941:
case 1740:
case 3948:
case 1628:
case 1438:
case 3870:
case 138:
case 2332:
case 661:
case 159:
case 2235:
case 2723:
case 2133:
case 1522:
case 1939:
case 1254:
case 2416:
case 23:
case 3616:
case 3123:
case 306:
case 3225:
case 781:
case 3733:
case 339:
case 2649:
case 799:
case 3273:
case 3704:
case 140:
case 3175:
case 568:
case 2775:
case 3150:
case 746:
case 3449:
case 680:
case 3031:
case 2038:
case 137:
case 962:
case 1293:
case 3442:
case 536:
case 1136:
case 2642:
case 427:
case 3059:
case 2322:
case 1621:
case 1834:
case 1431:
case 641:
case 2870:
case 629:
case 4034:
case 1638:
case 397:
case 1428:
case 1286:
case 686:
case 737:
case 934:
case 1510:
case 1042:
case 3941:
case 2948:
case 3339:
case 3107:
case 3764:
case 3:
case 199:
case 740:
case 2164:
case 181:
case 2283:
case 2358:
case 2185:
case 3118:
case 2541:
case 3548:
case 547:
case 401:
case 1613:
case 1126:
case 738:
case 1736:
case 3247:
case 759:
case 1551:
case 2442:
case 3642:
case 1837:
case 1539:
case 942:
case 472:
case 2880:
case 3866:
case 2167:
case 2704:
case 1958:
case 841:
case 2175:
case 766:
case 3310:
case 2052:
case 2150:
case 3104:
case 548:
case 2449:
case 4045:
case 3235:
case 3723:
case 3416:
case 886:
case 2733:
case 258:
case 1532:
case 2123:
case 206:
case 1845:
case 239:
case 899:
case 1445:
case 1179:
case 3360:
case 2792:
case 2973:
case 3090:
case 2117:
case 2108:
case 3101:
case 588:
case 2666:
case 201:
case 3996:
case 2925:
case 2701:
case 1900:
case 881:
case 3935:
case 1172:
case 2799:
case 2034:
case 515:
case 2480:
case 1055:
case 3024:
case 3199:
case 3573:
case 1437:
case 3525:
case 2386:
case 2544:
case 860:
case 65:
case 3714:
case 141:
case 3354:
case 4052:
case 780:
case 3606:
case 439:
case 3168:
case 3761:
case 1986:
case 327:
case 699:
case 4059:
case 3027:
case 4031:
case 1557:
case 3241:
case 272:
case 3655:
case 1828:
case 1080:
case 1560:
case 1624:
case 3393:
case 3670:
case 3583:
case 3820:
case 1399:
case 1471:
case 1589:
case 1069:
case 2830:
case 1678:
case 4074:
case 3568:
case 2561:
case 61:
case 679:
case 3744:
case 733:
case 1786:
case 1887:
case 3409:
case 1160:
case 936:
case 3183:
case 352:
case 684:
case 3285:
case 1392:
case 2968:
case 3211:
case 1157:
case 2218:
case 3698:
case 253:
case 2207:
case 562:
case 2602:
case 485:
case 3914:
case 884:
case 4077:
case 4065:
case 422:
case 1865:
case 2508:
case 1877:
case 204:
case 1884:
case 1579:
case 2147:
case 3846:
case 2517:
case 2999:
case 3669:
case 764:
case 132:
case 2469:
case 3078:
case 1236:
case 3592:
case 0:
case 1415:
case 3382:
case 417:
case 1154:
case 3125:
case 2196:
case 245:
case 2901:
case 3917:
case 3267:
case 3173:
case 879:
case 555:
case 2992:
case 453:
case 3923:
case 1139:
case 3497:
case 285:
case 3950:
case 2904:
case 1526:
case 1643:
case 77:
case 2412:
case 2697:
case 3217:
case 2074:
case 2646:
case 1132:
case 2523:
case 4081:
case 1815:
case 492:
case 3533:
case 378:
case 1030:
case 2550:
case 1465:
case 1936:
case 2419:
case 3619:
case 844:
case 1012:
case 3261:
case 583:
case 3911:
case 2268:
case 975:
case 1540:
case 1110:
case 3964:
case 2907:
case 3891:
case 644:
case 2898:
case 11:
case 2336:
case 2511:
case 2141:
case 3148:
case 1487:
case 404:
case 323:
case 184:
case 2748:
case 3741:
case 222:
case 2585:
case 2077:
case 2430:
case 4071:
case 2620:
case 2084:
case 2564:
case 1474:
case 377:
case 3630:
case 3507:
case 1871:
case 3550:
case 1272:
case 2504:
case 3419:
case 864:
case 1053:
case 3567:
case 3575:
case 3299:
case 2340:
case 1665:
case 1677:
case 493:
case 3869:
case 3646:
case 1020:
case 1684:
case 1732:
case 2005:
case 2446:
case 1311:
case 2497:
case 2950:
case 3904:
case 385:
case 1279:
case 1158:
case 3412:
case 1129:
case 1094:
case 2923:
case 1364:
case 3862:
case 452:
case 3933:
case 2056:
case 1046:
case 3430:
case 988:
case 3084:
case 3564:
case 3620:
case 1405:
case 833:
case 317:
case 2420:
case 2507:
case 2630:
case 1878:
case 277:
case 2148:
case 3336:
case 223:
case 2809:
case 1687:
case 3748:
case 2326:
case 3065:
case 3077:
case 664:
case 1456:
case 2214:
case 3694:
case 2964:
case 119:
case 3907:
case 2494:
case 3898:
case 1350:
case 915:
case 1710:
case 465:
case 1375:
case 2802:
case 1289:
case 582:
case 1097:
case 542:
case 3207:
case 3602:
case 2264:
case 2379:
case 1757:
case 1317:
case 2894:
case 4056:
case 2183:
case 252:
case 1760:
case 2211:
case 3691:
case 2698:
case 2961:
case 3218:
case 1856:
case 353:
case 3783:
case 2853:
case 3609:
case 3144:
case 619:
case 3514:
case 67:
case 1186:
case 2409:
case 4005:
case 534:
case 2173:
case 3462:
case 2275:
case 2389:
case 1091:
case 3773:
case 3204:
case 2662:
case 1361:
case 2796:
case 4043:
case 3233:
case 265:
case 2735:
case 3196:
case 2223:
case 2897:
case 2125:
case 1002:
case 1754:
case 3901:
case 345:
case 1488:
case 1615:
case 2669:
case 3147:
case 595:
case 947:
case 2078:
case 1972:
case 2747:
case 2382:
case 1681:
case 3508:
case 2501:
case 3819:
case 3384:
case 803:
case 1346:
case 1721:
case 654:
case 382:
case 3594:
case 1128:
case 3930:
case 2209:
case 1738:
case 1440:
case 1278:
case 3036:
case 3365:
case 455:
case 3095:
case 3664:
case 3520:
case 1574:
case 3407:
case 116:
case 2607:
case 2530:
case 710:
case 1956:
case 2464:
case 3553:
case 1050:
case 3611:
case 3298:
case 2411:
case 2814:
case 1288:
case 1353:
case 1713:
case 2142:
case 3597:
case 3269:
case 927:
case 3742:
case 3387:
case 2946:
case 912:
case 4072:
case 3374:
case 462:
case 2305:
case 2467:
case 3912:
case 3262:
case 3749:
case 776:
case 603:
case 3650:
case 518:
case 2808:
case 1085:
case 1943:
case 1879:
case 1064:
case 2817:
case 1394:
case 3546:
case 2356:
case 3892:
case 2423:
case 4079:
case 325:
case 2569:
case 3617:
case 2297:
case 3492:
case 1243:
case 1515:
case 504:
case 771:
case 3833:
case 3212:
case 1391:
case 2692:
case 735:
case 2417:
case 395:
case 2408:
case 900:
case 2766:
case 3804:
case 2850:
case 2875:
case 3166:
case 2867:
case 3608:
case 1472:
case 2180:
case 670:
case 2699:
case 3499:
case 1763:
case 103:
case 2082:
case 2562:
case 1988:
case 3780:
case 2378:
case 1137:
case 1727:
case 255:
case 4026:
case 1826:
case 2246:
case 870:
case 2811:
case 3818:
case 1256:
case 592:
case 154:
case 2885:
case 1008:
case 3614:
case 2294:
case 1017:
case 2461:
case 2079:
case 3661:
case 3998:
case 93:
case 1489:
case 1571:
case 2106:
case 3230:
case 2220:
case 3502:
case 262:
case 998:
case 2170:
case 243:
case 1482:
case 2253:
case 2388:
case 1978:
case 3770:
case 3591:
case 1134:
case 1836:
case 355:
case 1127:
case 234:
case 1737:
case 1265:
case 1277:
case 1163:
case 3699:
case 2219:
case 3180:
case 3082:
case 824:
case 2371:
case 1981:
case 482:
case 2804:
case 3766:
case 295:
case 3867:
case 2166:
case 3601:
case 2608:
case 3089:
case 3297:
case 1679:
case 1588:
case 1068:
case 3417:
case 1745:
case 2962:
case 2212:
case 362:
case 3170:
case 343:
case 1287:
case 2770:
case 3155:
case 1971:
case 1682:
case 2591:
case 242:
case 3072:
case 2230:
case 3909:
case 3220:
case 552:
case 2502:
case 194:
case 1274:
case 939:
case 3864:
case 906:
case 2706:
case 1362:
case 2998:
case 3668:
case 2807:
case 2818:
case 3414:
case 135:
case 3294:
case 2614:
case 624:
case 1001:
case 3291:
case 1312:
case 3618:
case 2298:
case 1004:
case 3814:
case 495:
case 3411:
case 2418:
case 2685:
case 3343:
case 770:
case 2520:
case 694:
case 2664:
case 3994:
case 3202:
case 3607:
case 3464:
case 1505:
case 1033:
case 2868:
case 3953:
case 1759:
case 3026:
case 1319:
case 124:
case 282:
case 1138:
case 2594:
case 3920:
case 1728:
case 1556:
case 635:
case 802:
case 3209:
case 2930:
case 2433:
case 2546:
case 2116:
case 1007:
case 3356:
case 2892:
case 3633:
case 225:
case 3716:
case 2912:
case 3475:
case 3467:
case 2650:
case 1018:
case 3808:
case 871:
case 2675:
case 3519:
case 602:
case 2667:
case 3149:
case 463:
case 2899:
case 442:
case 1984:
case 972:
case 1330:
case 913:
case 3305:
case 1495:
case 1281:
case 3142:
case 894:
case 2269:
case 2742:
case 1626:
case 2387:
case 1977:
case 1965:
case 3119:
case 2280:
case 150:
case 1784:
case 348:
case 1237:
case 3321:
case 3746:
case 1422:
case 2146:
case 3847:
case 268:
case 1632:
case 992:
case 769:
case 2949:
case 3896:
case 2197:
case 2352:
case 598:
case 74:
case 2712:
case 3797:
case 3542:
case 1800:
case 30:
case 1639:
case 889:
case 3266:
case 3916:
case 2873:
case 1928:
case 1774:
case 347:
case 2022:
case 2120:
case 2730:
case 1931:
case 2448:
case 2270:
case 5:
case 3753:
case 3313:
case 2255:
case 4086:
case 2153:
case 1959:
case 3648:
case 1342:
case 16:
case 149:
case 674:
case 3039:
case 1521:
case 790:
case 196:
case 2883:
case 2029:
case 2194:
case 2058:
case 1610:
case 1349:
case 1952:
case 330:
case 431:
case 512:
case 191:
case 2102:
case 573:
case 2000:
case 985:
case 3054:
case 3702:
case 3555:
case 2906:
case 436:
case 3198:
case 2191:
case 2483:
case 527:
case 1660:
case 1073:
case 189:
case 1524:
case 3327:
case 850:
case 621:
case 3444:
case 1903:
case 2848:
case 2109:
case 66:
case 1259:
case 1934:
case 468:
case 3506:
case 3363:
case 1590:
case 2970:
case 3162:
case 2473:
case 896:
case 650:
case 4029:
case 3390:
case 2762:
case 1829:
case 3580:
case 3435:
case 231:
case 2696:
case 1858:
case 3966:
case 3496:
case 2425:
case 1654:
case 4058:
case 1822:
case 467:
case 2242:
case 3447:
case 1781:
case 917:
case 388:
case 1370:
case 4022:
case 2566:
case 2303:
case 807:
case 2506:
case 2363:
case 1924:
case 287:
case 1686:
case 114:
case 3848:
case 3337:
case 1221:
case 3109:
case 2555:
case 3483:
case 18:
case 1534:
case 1457:
case 40:
case 2683:
case 2570:
case 2791:
case 1990:
case 3798:
case 1810:
case 3102:
case 1096:
case 890:
case 2054:
case 2702:
case 572:
case 1035:
case 1676:
case 1044:
case 923:
case 3769:
case 1493:
case 977:
case 4032:
case 808:
case 288:
case 501:
case 2324:
case 430:
case 331:
case 2966:
case 1454:
case 607:
case 3425:
case 1537:
case 1600:
case 4051:
case 2496:
case 869:
case 2162:
case 1839:
case 2057:
case 3762:
case 2390:
case 2580:
case 2060:
case 726:
case 791:
case 2673:
case 1439:
case 2266:
case 2916:
case 4054:
case 721:
case 2010:
case 3949:
case 796:
case 3712:
case 2835:
case 2797:
case 2112:
case 1854:
case 1451:
case 248:
case 1432:
case 487:
case 4093:
case 3328:
case 1622:
case 2321:
case 1227:
case 2338:
case 368:
case 1913:
case 558:
case 506:
case 1263:
case 1177:
case 1165:
case 3280:
case 539:
case 851:
case 3942:
case 814:
case 3058:
case 415:
case 3206:
case 965:
case 1528:
case 2039:
case 4060:
case 820:
case 1860:
case 651:
case 14:
case 1316:
case 3194:
case 4057:
case 2844:
case 3270:
case 3448:
case 2441:
case 1224:
case 2313:
case 557:
case 3153:
case 2648:
case 2130:
case 750:
case 3022:
case 1938:
case 3120:
case 1705:
case 2032:
case 438:
case 897:
case 2463:
case 3055:
case 1947:
case 1680:
case 1573:
case 1024:
case 1199:
case 3663:
case 3070:
case 3437:
case 1525:
case 2344:
case 2813:
case 3554:
case 4016:
case 1357:
case 466:
case 1717:
case 1360:
case 49:
case 2645:
case 3383:
case 1816:
case 3229:
case 2576:
case 1101:
case 1996:
case 1466:
case 3900:
case 2239:
case 2954:
case 1935:
case 3403:
case 6:
case 589:
case 127:
case 3859:
case 2603:
case 600:
case 1241:
case 2634:
case 3182:
case 3828:
case 1655:
case 2424:
case 3624:
case 3560:
case 2347:
case 3434:
case 2838:
case 526:
case 1670:
case 3831:
case 3325:
case 2396:
case 3852:
case 329:
case 970:
case 1714:
case 1606:
case 574:
case 2490:
case 2789:
case 2960:
case 1761:
case 2210:
case 3189:
case 29:
case 627:
case 2890:
case 612:
case 2910:
case 480:
case 3049:
case 706:
case 2260:
case 1351:
case 2652:
case 1548:
case 3452:
case 1118:
case 100:
case 3834:
case 197:
case 1244:
case 3638:
case 1332:
case 1013:
case 521:
case 3510:
case 828:
case 2740:
case 2951:
case 911:
case 757:
case 42:
case 1767:
case 1104:
case 461:
case 550:
case 2522:
case 2254:
case 2939:
case 13:
case 3532:
case 3845:
case 3929:
case 2195:
case 3551:
case 3837:
case 1642:
case 2341:
case 2726:
case 2413:
case 827:
case 3539:
case 812:
case 2863:
case 2529:
case 3276:
case 54:
case 2510:
case 2042:
case 1948:
case 2803:
case 3740:
case 3628:
case 3438:
case 25:
case 2431:
case 3631:
case 338:
case 3421:
case 4055:
case 2286:
case 359:
case 902:
case 3824:
case 1718:
case 2049:
case 281:
case 556:
case 3652:
case 1283:
case 1185:
case 1111:
case 3257:
case 672:
case 801:
case 246:
case 3016:
case 366:
case 157:
case 1164:
case 1707:
case 1028:
case 4080:
case 590:
case 601:
case 1031:
case 3932:
case 337:
case 813:
case 797:
case 3293:
case 3827:
case 3195:
case 994:
case 3558:
case 2551:
case 1442:
case 2348:
case 2837:
case 3413:
case 486:
case 3939:
case 1225:
case 2532:
case 158:
case 1123:
case 2845:
case 139:
case 2929:
case 1704:
case 3951:
case 7:
case 507:
case 1052:
case 260:
case 3576:
case 1666:
case 1925:
case 3239:
case 481:
case 380:
case 857:
case 1547:
case 1973:
case 1117:
case 2437:
case 3344:
case 1596:
case 3813:
case 606:
case 773:
case 2976:
case 712:
case 520:
case 1842:
case 3637:
case 2554:
case 1480:
case 2663:
case 727:
case 3490:
case 858:
case 839:
case 1161:
case 2373:
case 514:
case 551:
case 1045:
case 1983:
case 286:
case 1406:
case 1768:
case 2690:
case 3210:
case 3396:
case 1114:
case 2852:
case 2325:
case 1544:
case 460:
case 361:
case 3586:
case 3335:
case 241:
case 2557:
case 3634:
case 1470:
case 1248:
case 2828:
case 2182:
case 728:
case 1455:
case 2624:
case 3838:
case 2831:
case 3782:
case 2434:
case 2986:
case 1376:
case 657:
case 2403:
case 3603:
case 1037:
case 2786:
case 2887:
case 3186:
case 1015:
case 511:
case 192:
case 3240:
case 2678:
case 3671:
case 1561:
case 1081:
case 1602:
case 885:
case 3989:
case 2157:
case 1218:
case 2392:
case 1968:
case 1691:
case 3760:
case 765:
case 153:
case 2062:
case 1999:
case 1517:
case 3793:
case 3681:
case 333:
case 817:
case 2688:
case 4019:
case 793:
case 3009:
case 822:
case 1819:
case 1462:
case 479:
case 3979:
case 996:
case 1204:
case 2572:
case 1773:
case 3091:
case 2368:
case 1992:
case 503:
case 3100:
case 1812:
case 1196:
case 4012:
case 618:
case 752:
case 3754:
case 1901:
case 3536:
case 185:
case 991:
case 2526:
case 926:
case 405:
case 3595:
case 2643:
case 2151:
case 1201:
case 989:
case 3094:
case 3364:
case 4062:
case 2139:
case 2729:
case 3272:
case 2465:
case 974:
case 2936:
case 777:
case 1575:
case 1087:
case 444:
case 2995:
case 3665:
case 1646:
case 2722:
case 1074:
case 118:
case 1523:
case 2132:
case 3020:
case 892:
case 2030:
case 3323:
case 2333:
case 21:
case 279:
case 2012:
case 2304:
case 3350:
case 3710:
case 3097:
case 692:
case 3289:
case 1430:
case 3046:
case 2605:
case 432:
case 653:
case 1141:
case 2487:
case 3282:
case 1748:
case 3940:
case 3687:
case 516:
case 1077:
case 1585:
case 1065:
case 893:
case 722:
case 2684:
case 2732:
case 1005:
case 1533:
case 2122:
case 1446:
case 665:
case 464:
case 717:
case 2926:
case 1340:
case 914:
case 2094:
case 2739:
case 3139:
case 1056:
case 2311:
case 2751:
case 2279:
case 2595:
case 2158:
case 1217:
case 1975:
case 1967:
case 3151:
case 2385:
case 1148:
case 1518:
case 123:
case 1809:
case 576:
case 1741:
case 1326:
case 2940:
case 652:
case 2687:
case 718:
case 1453:
case 433:
case 3605:
case 177:
case 3304:
case 4002:
case 1911:
case 693:
case 2710:
case 1261:
case 2375:
case 524:
case 1985:
case 1043:
case 3110:
case 2289:
case 3540:
case 4091:
case 1214:
case 2323:
case 27:
case 3333:
case 31:
case 1494:
case 379:
case 920:
case 3656:
case 1891:
case 2989:
case 1379:
case 1285:
case 1491:
case 745:
case 1961:
case 1698:
case 4094:
case 3157:
case 1211:
case 3582:
case 677:
case 305:
case 990:
case 3301:
case 2308:
case 1264:
case 907:
case 3589:
case 2478:
case 2240:
case 3471:
case 3678:
case 2671:
case 193:
case 535:
case 1568:
case 1088:
case 4020:
case 1744:
case 344:
case 1853:
case 3786:
case 4053:
case 1409:
case 264:
case 2314:
case 1223:
case 1735:
case 502:
case 1125:
case 3700:
case 1908:
case 1173:
case 1599:
case 969:
case 2979:
case 2091:
case 1250:
case 47:
case 2361:
case 3368:
case 419:
case 3776:
case 3865:
case 823:
case 3481:
case 2488:
case 3579:
case 3295:
case 877:
case 1846:
case 1592:
case 1078:
case 233:
case 1382:
case 2681:
case 1747:
case 3415:
case 51:
case 1953:
case 3759:
case 3640:
case 3987:
case 3319:
case 403:
case 324:
case 3974:
case 3138:
case 3556:
case 3121:
case 2882:
case 183:
case 2128:
case 1209:
case 3731:
case 2050:
case 725:
case 980:
case 4014:
case 1485:
case 1618:
case 2152:
case 1814:
case 2587:
case 4061:
case 2574:
case 1202:
case 2889:
case 1861:
case 3330:
case 1305:
case 843:
case 2426:
case 3281:
case 3495:
case 2288:
case 2636:
case 2713:
case 1142:
case 1040:
case 3436:
case 782:
case 3977:
case 2695:
case 3626:
case 3113:
case 2879:
case 2064:
case 1817:
case 2394:
case 655:
case 1356:
case 3007:
case 1423:
case 1716:
case 1467:
case 310:
case 454:
case 92:
case 1604:
case 2565:
case 2943:
case 2577:
case 1997:
case 1766:
case 1867:
case 1875:
case 2014:
case 4050:
case 2302:
case 1601:
case 1297:
case 1823:
case 1089:
case 3679:
case 966:
case 2479:
case 3588:
case 3068:
case 3398:
case 4023:
case 99:
case 3836:
case 763:
case 155:
case 3737:
case 3284:
case 302:
case 3277:
case 3915:
case 3265:
case 883:
case 1699:
case 938:
case 1562:
case 1082:
case 203:
case 2988:
case 2017:
case 1079:
case 1461:
case 4064:
case 544:
case 2790:
case 2489:
case 3092:
case 4085:
case 1414:
case 470:
case 2256:
case 683:
case 1885:
case 2008:
case 3001:
case 4011:
case 940:
case 1294:
case 1170:
case 3369:
case 3124:
case 505:
case 3971:
case 2978:
case 1155:
case 2134:
case 1909:
case 394:
case 3703:
case 2840:
case 2915:
case 3472:
case 202:
case 303:
case 95:
case 1499:
case 1371:
case 2672:
case 1780:
case 3988:
case 3727:
case 2284:
case 3826:
case 2737:
case 2895:
case 134:
case 1492:
case 1617:
case 3145:
case 4033:
case 476:
case 3243:
case 2068:
case 3391:
case 1212:
case 2398:
case 1962:
case 195:
case 533:
case 4004:
case 1608:
case 3302:
case 3014:
case 981:
case 1230:
case 3103:
case 3205:
case 3840:
case 3482:
case 2734:
case 2124:
case 2971:
case 1770:
case 2682:
case 1591:
case 755:
case 142:
case 1818:
case 3256:
case 1509:
case 311:
case 682:
case 4018:
case 2001:
case 2190:
case 4007:
case 1468:
case 825:
case 1998:
case 3790:
case 3571:
case 2578:
case 1520:
case 1664:
case 3023:
case 3889:
case 276:
case 2505:
case 3956:
case 2752:
case 1553:
case 1298:
case 3050:
case 2004:
case 1418:
case 3587:
case 3067:
case 1384:
case 3131:
case 182:
case 2728:
case 3721:
case 402:
case 2556:
case 3738:
case 2731:
case 2121:
case 3882:
case 1036:
case 3278:
case 2271:
case 2640:
case 2987:
case 1095:
case 57:
case 2319:
case 1262:
case 1912:
case 1650:
case 4001:
case 941:
case 1749:
case 3565:
case 471:
case 1801:
case 1404:
case 1433:
case 3879:
case 4092:
case 2007:
case 2281:
case 3288:
case 494:
case 1269:
case 1597:
case 1919:
case 1387:
case 2113:
case 2626:
case 1742:
case 3695:
case 3320:
case 863:
case 1374:
case 842:
case 2784:
case 2237:
case 3622:
case 1328:
case 3227:
case 3893:
case 3184:
case 2422:
case 675:
case 1331:
case 168:
case 1516:
case 3165:
case 3177:
case 2876:
case 3913:
case 2765:
case 250:
case 1719:
case 3041:
case 944:
case 489:
case 109:
case 3439:
case 136:
case 1949:
case 1197:
case 2245:
case 1712:
case 537:
case 3552:
case 1448:
case 1270:
case 566:
case 3224:
case 1255:
case 59:
case 1153:
case 2959:
case 2342:
case 2928:
case 1022:
case 2105:
case 1120:
case 2931:
case 932:
case 308:
case 3174:
case 3705:
case 3290:
case 2610:
case 2952:
case 831:
case 3559:
case 70:
case 1206:
case 249:
case 2521:
case 3860:
case 296:
case 3531:
case 1191:
case 38:
case 836:
case 3457:
case 2073:
case 2524:
case 3366:
case 3096:
case 667:
case 3810:
case 1000:
case 3503:
case 3171:
case 868:
case 1955:
case 3924:
case 2380:
case 1970:
case 561:
case 788:
case 450:
case 314:
case 351:
case 3686:
case 2231:
case 1644:
case 4048:
case 1076:
case 274:
case 1337:
case 2903:
case 1848:
case 2486:
case 1109:
case 2228:
case 3221:
case 175:
case 3454:
case 2400:
case 1696:
case 3839:
case 496:
case 91:
case 2945:
case 449:
case 1249:
case 1566:
case 636:
case 3676:
case 609:
case 787:
case 2937:
case 1303:
case 867:
case 2188:
case 2822:
case 3181:
case 3493:
case 2355:
case 1334:
case 1647:
case 1980:
case 3788:
case 3832:
case 3963:
case 3545:
case 3115:
case 251:
case 1709:
case 586:
case 3231:
case 3903:
case 374:
case 3228:
case 2221:
case 3486:
case 3259:
case 407:
case 2171:
case 3178:
case 2924:
case 1093:
case 3771:
case 3380:
case 187:
case 2366:
case 391:
case 2096:
case 1054:
case 647:
case 2035:
case 2503:
case 2460:
case 1198:
case 3657:
case 731:
case 2457:
case 1570:
case 80:
case 3524:
case 3073:
case 2990:
case 3355:
case 2181:
case 408:
case 188:
case 1169:
case 847:
case 1324:
case 3693:
case 2213:
case 2545:
case 2927:
case 2044:
case 2676:
case 3476:
case 60:
case 2839:
case 44:
case 3306:
case 919:
case 97:
case 1060:
case 830:
case 3527:
case 1966:
case 1216:
case 3858:
case 3400:
case 1625:
case 2537:
case 2600:
case 648:
case 115:
case 2658:
case 1010:
case 3143:
case 3245:
case 688:
case 3513:
case 2854:
case 1112:
case 3800:
case 2743:
case 290:
case 1542:
case 1266:
case 2629:
case 48:
case 2263:
case 767:
case 964:
case 3876:
case 1119:
case 2041:
case 615:
case 148:
case 2432:
case 3784:
case 560:
case 3422:
case 2227:
case 2184:
case 3632:
case 1338:
case 36:
case 3156:
case 3521:
case 2528:
case 321:
case 2860:
case 2316:
case 2531:
case 24:
case 687:
case 709:
case 2290:
case 3952:
case 3349:
case 55:
case 2410:
case 3928:
case 1720:
case 3105:
case 147:
case 3774:
case 3203:
case 581:
case 2705:
case 208:
case 256:
case 1844:
case 599:
case 2552:
case 3886:
case 2187:
case 2224:
case 1313:
case 768:
case 3787:
case 4044:
case 3234:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747576801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,];
var gg_b = "1747576801/";

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
