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
var o = 0;
switch (g) {
case 545:
case 3501:
case 3577:
case 3810:
case 2812:
case 1572:
case 2633:
case 936:
case 2340:
case 1288:
case 2341:
case 2769:
case 2702:
case 3079:
case 2911:
case 1531:
case 2806:
case 1696:
case 1214:
case 1147:
case 3774:
case 3320:
case 744:
case 19:
case 3396:
case 957:
case 2960:
case 3485:
case 2823:
case 1677:
case 3152:
case 2970:
case 597:
case 2181:
case 1018:
case 351:
case 1618:
case 201:
case 4083:
case 1754:
case 1768:
case 3692:
case 2804:
case 2350:
case 3250:
case 2514:
case 1390:
case 4063:
case 3613:
case 163:
case 1881:
case 3150:
case 1181:
case 1931:
case 3242:
case 4067:
case 2462:
case 1461:
case 1534:
case 433:
case 130:
case 1008:
case 907:
case 3037:
case 523:
case 2458:
case 436:
case 2280:
case 4042:
case 3438:
case 1341:
case 234:
case 2:
case 66:
case 3973:
case 1753:
case 2000:
case 3604:
case 1637:
case 2802:
case 3388:
case 569:
case 859:
case 1081:
case 2242:
case 366:
case 210:
case 1556:
case 3966:
case 3747:
case 153:
case 3278:
case 1205:
case 2717:
case 3236:
case 2513:
case 1307:
case 1948:
case 2620:
case 3108:
case 3791:
case 253:
case 3032:
case 3169:
case 2381:
case 2684:
case 2055:
case 3783:
case 1294:
case 898:
case 380:
case 3234:
case 3523:
case 2667:
case 3880:
case 265:
case 2373:
case 1149:
case 3301:
case 1496:
case 2484:
case 953:
case 1161:
case 808:
case 424:
case 2710:
case 3622:
case 3479:
case 3548:
case 1117:
case 3997:
case 3013:
case 1879:
case 2201:
case 3359:
case 2459:
case 1374:
case 51:
case 489:
case 2546:
case 3280:
case 632:
case 494:
case 3560:
case 1966:
case 3256:
case 591:
case 1443:
case 3326:
case 2361:
case 1936:
case 3459:
case 270:
case 919:
case 2061:
case 585:
case 931:
case 4059:
case 4048:
case 2277:
case 2256:
case 2082:
case 2913:
case 2456:
case 1029:
case 3076:
case 2676:
case 4002:
case 2464:
case 118:
case 3871:
case 3723:
case 2210:
case 97:
case 428:
case 1825:
case 1055:
case 1852:
case 1335:
case 3515:
case 3196:
case 2062:
case 1797:
case 2939:
case 2395:
case 2601:
case 1977:
case 477:
case 2675:
case 3746:
case 202:
case 2482:
case 2203:
case 2768:
case 926:
case 3300:
case 1809:
case 2526:
case 2583:
case 560:
case 3426:
case 3951:
case 3675:
case 3656:
case 3427:
case 3340:
case 3988:
case 1568:
case 1388:
case 891:
case 1868:
case 4007:
case 1245:
case 1452:
case 1523:
case 3757:
case 2584:
case 3187:
case 2837:
case 4010:
case 1067:
case 273:
case 314:
case 2442:
case 3958:
case 3044:
case 655:
case 2713:
case 1778:
case 2011:
case 1692:
case 3648:
case 465:
case 2883:
case 1276:
case 1314:
case 996:
case 3199:
case 3953:
case 3946:
case 2604:
case 441:
case 3964:
case 3040:
case 1128:
case 225:
case 1188:
case 1362:
case 3571:
case 189:
case 454:
case 1685:
case 2117:
case 750:
case 400:
case 1028:
case 685:
case 3315:
case 154:
case 1643:
case 3073:
case 930:
case 1398:
case 3986:
case 1059:
case 1075:
case 498:
case 2962:
case 1537:
case 2921:
case 680:
case 4071:
case 711:
case 3677:
case 349:
case 1672:
case 3655:
case 298:
case 3304:
case 3895:
case 698:
case 924:
case 499:
case 2507:
case 162:
case 3482:
case 348:
case 2777:
case 1212:
case 3202:
case 3087:
case 1482:
case 1873:
case 837:
case 2978:
case 139:
case 1518:
case 3281:
case 3146:
case 995:
case 2246:
case 3755:
case 2012:
case 2866:
case 2686:
case 1575:
case 3257:
case 2511:
case 3112:
case 485:
case 3053:
case 2270:
case 1484:
case 2877:
case 2475:
case 1137:
case 3654:
case 1422:
case 2957:
case 4014:
case 679:
case 1830:
case 1121:
case 2285:
case 2230:
case 3823:
case 3444:
case 1097:
case 2193:
case 3684:
case 1716:
case 307:
case 3625:
case 758:
case 244:
case 1770:
case 475:
case 669:
case 1930:
case 1607:
case 1524:
case 976:
case 2095:
case 2123:
case 2874:
case 1941:
case 2258:
case 1491:
case 2089:
case 3063:
case 2762:
case 2284:
case 3471:
case 1972:
case 219:
case 3961:
case 1871:
case 1332:
case 4064:
case 902:
case 1719:
case 625:
case 2753:
case 2174:
case 660:
case 2835:
case 3610:
case 615:
case 2698:
case 3220:
case 3892:
case 2678:
case 3189:
case 1053:
case 922:
case 1652:
case 1305:
case 1199:
case 3552:
case 3035:
case 824:
case 2214:
case 183:
case 2933:
case 3330:
case 969:
case 1375:
case 430:
case 1621:
case 311:
case 2252:
case 2666:
case 1984:
case 1308:
case 321:
case 1660:
case 3480:
case 3736:
case 396:
case 691:
case 1298:
case 3685:
case 2033:
case 2101:
case 1545:
case 2638:
case 2566:
case 3028:
case 511:
case 337:
case 419:
case 943:
case 2443:
case 728:
case 2983:
case 2775:
case 3922:
case 338:
case 1502:
case 1721:
case 137:
case 658:
case 2535:
case 893:
case 1311:
case 621:
case 3650:
case 3116:
case 2330:
case 2562:
case 3478:
case 890:
case 609:
case 2063:
case 1284:
case 230:
case 2231:
case 129:
case 3568:
case 315:
case 2517:
case 40:
case 2760:
case 3738:
case 1442:
case 3504:
case 2628:
case 1757:
case 2227:
case 3375:
case 3554:
case 12:
case 1148:
case 2050:
case 1278:
case 1964:
case 3487:
case 3620:
case 3678:
case 82:
case 906:
case 3904:
case 760:
case 2787:
case 3437:
case 414:
case 2518:
case 2019:
case 1894:
case 2485:
case 3371:
case 1550:
case 50:
case 242:
case 1821:
case 3797:
case 1333:
case 2290:
case 1201:
case 2652:
case 4068:
case 1644:
case 3772:
case 1195:
case 2691:
case 547:
case 1022:
case 2741:
case 3924:
case 3176:
case 2935:
case 570:
case 403:
case 4018:
case 752:
case 497:
case 239:
case 2086:
case 1300:
case 3825:
case 2139:
case 1903:
case 2471:
case 1956:
case 3516:
case 2401:
case 2956:
case 354:
case 177:
case 1601:
case 1737:
case 2792:
case 971:
case 1096:
case 1510:
case 3525:
case 3185:
case 633:
case 3916:
case 739:
case 2521:
case 3641:
case 3021:
case 1046:
case 3460:
case 3784:
case 3274:
case 4023:
case 52:
case 1628:
case 2624:
case 2738:
case 3570:
case 2265:
case 1257:
case 247:
case 1031:
case 2749:
case 3090:
case 973:
case 543:
case 3411:
case 1264:
case 3321:
case 2953:
case 3435:
case 3377:
case 1497:
case 158:
case 864:
case 192:
case 341:
case 2093:
case 1609:
case 830:
case 2180:
case 1464:
case 91:
case 1938:
case 1230:
case 3682:
case 3820:
case 214:
case 3194:
case 2497:
case 2803:
case 843:
case 1853:
case 2319:
case 3208:
case 3556:
case 3091:
case 23:
case 3409:
case 2891:
case 501:
case 3463:
case 4000:
case 2975:
case 3714:
case 1024:
case 2436:
case 2578:
case 1087:
case 1658:
case 2034:
case 2291:
case 814:
case 2985:
case 1733:
case 3952:
case 2824:
case 4086:
case 1878:
case 4060:
case 255:
case 3638:
case 2720:
case 557:
case 2394:
case 1228:
case 3402:
case 1997:
case 1037:
case 3616:
case 1366:
case 963:
case 2296:
case 3043:
case 3046:
case 69:
case 2155:
case 3522:
case 2943:
case 3030:
case 3458:
case 2533:
case 3720:
case 1408:
case 3354:
case 2466:
case 303:
case 1249:
case 4084:
case 2212:
case 313:
case 2832:
case 3947:
case 4065:
case 3859:
case 988:
case 994:
case 3407:
case 1447:
case 3996:
case 2920:
case 1227:
case 644:
case 423:
case 2816:
case 3455:
case 849:
case 2751:
case 181:
case 1745:
case 3403:
case 186:
case 3789:
case 1602:
case 2164:
case 1468:
case 2192:
case 3080:
case 3292:
case 1891:
case 1432:
case 18:
case 727:
case 2559:
case 467:
case 1544:
case 4081:
case 3349:
case 3188:
case 847:
case 3097:
case 516:
case 3838:
case 259:
case 2963:
case 3750:
case 3992:
case 2075:
case 1177:
case 3541:
case 3227:
case 515:
case 857:
case 2740:
case 3106:
case 2596:
case 938:
case 1206:
case 2580:
case 2522:
case 3967:
case 1567:
case 3374:
case 149:
case 2814:
case 1702:
case 3928:
case 1857:
case 1139:
case 3404:
case 1722:
case 2616:
case 268:
case 888:
case 96:
case 1342:
case 3669:
case 3206:
case 1460:
case 1241:
case 2889:
case 437:
case 1395:
case 3725:
case 2038:
case 827:
case 405:
case 1755:
case 2895:
case 3026:
case 2555:
case 2973:
case 554:
case 2737:
case 2419:
case 2409:
case 1922:
case 3410:
case 3064:
case 2914:
case 3172:
case 3331:
case 3572:
case 2245:
case 546:
case 512:
case 3883:
case 4030:
case 2659:
case 3045:
case 2080:
case 948:
case 1322:
case 3229:
case 1573:
case 1219:
case 659:
case 1423:
case 2755:
case 1584:
case 3029:
case 1712:
case 3174:
case 3673:
case 104:
case 385:
case 2606:
case 2224:
case 102:
case 525:
case 1901:
case 3878:
case 1633:
case 3475:
case 3507:
case 3640:
case 2460:
case 2054:
case 2446:
case 68:
case 670:
case 3862:
case 2380:
case 1905:
case 138:
case 173:
case 810:
case 1370:
case 3911:
case 2473:
case 3891:
case 2612:
case 990:
case 3476:
case 1615:
case 1661:
case 74:
case 2375:
case 692:
case 381:
case 3927:
case 3829:
case 432:
case 2307:
case 2919:
case 2016:
case 3534:
case 145:
case 1671:
case 1865:
case 3700:
case 1851:
case 1600:
case 2250:
case 541:
case 1455:
case 377:
case 3937:
case 729:
case 3224:
case 1224:
case 1623:
case 2327:
case 1207:
case 2223:
case 2040:
case 1044:
case 1268:
case 1606:
case 2750:
case 3047:
case 1446:
case 2198:
case 2843:
case 1932:
case 2106:
case 3703:
case 1516:
case 613:
case 542:
case 490:
case 1996:
case 1479:
case 2159:
case 331:
case 2730:
case 2152:
case 1520:
case 3214:
case 2520:
case 191:
case 2004:
case 697:
case 3844:
case 983:
case 3397:
case 2495:
case 1465:
case 2219:
case 1355:
case 1838:
case 2023:
case 2020:
case 1728:
case 1187:
case 1202:
case 3756:
case 584:
case 1295:
case 3378:
case 3175:
case 2398:
case 2249:
case 665:
case 562:
case 748:
case 1118:
case 15:
case 1151:
case 2131:
case 3727:
case 1555:
case 937:
case 2352:
case 736:
case 3943:
case 2415:
case 480:
case 2439:
case 518:
case 2434:
case 3786:
case 1993:
case 1723:
case 1929:
case 854:
case 2903:
case 870:
case 3695:
case 671:
case 2461:
case 4052:
case 2505:
case 3367:
case 3900:
case 960:
case 3275:
case 243:
case 3317:
case 1108:
case 1391:
case 1684:
case 1909:
case 33:
case 4038:
case 1732:
case 3161:
case 3724:
case 618:
case 2774:
case 2207:
case 3489:
case 3931:
case 160:
case 3841:
case 2017:
case 1935:
case 1140:
case 3346:
case 3722:
case 1882:
case 1666:
case 572:
case 1072:
case 1895:
case 3101:
case 2938:
case 59:
case 3503:
case 3751:
case 1953:
case 3633:
case 2317:
case 1559:
case 2021:
case 3949:
case 3767:
case 1143:
case 343:
case 95:
case 1297:
case 399:
case 2241:
case 2861:
case 1180:
case 3969:
case 1680:
case 446:
case 53:
case 1191:
case 705:
case 2326:
case 3366:
case 1338:
case 3:
case 1670:
case 529:
case 358:
case 175:
case 1774:
case 3431:
case 1098:
case 3645:
case 732:
case 3683:
case 2347:
case 2744:
case 3382:
case 3088:
case 3776:
case 2937:
case 1234:
case 1598:
case 1252:
case 3279:
case 2211:
case 1242:
case 799:
case 1367:
case 950:
case 2764:
case 3740:
case 3060:
case 2950:
case 510:
case 3207:
case 1481:
case 933:
case 1489:
case 822:
case 3052:
case 3200:
case 1780:
case 1256:
case 662:
case 72:
case 2338:
case 426:
case 1131:
case 3833:
case 209:
case 3093:
case 325:
case 508:
case 4:
case 3033:
case 2988:
case 1232:
case 364:
case 2529:
case 1272:
case 2885:
case 3681:
case 1421:
case 3289:
case 2890:
case 148:
case 1952:
case 3716:
case 1450:
case 3420:
case 980:
case 2457:
case 2564:
case 3584:
case 2626:
case 1210:
case 1012:
case 2356:
case 2955:
case 1991:
case 1323:
case 1795:
case 326:
case 44:
case 2872:
case 3858:
case 216:
case 2619:
case 3408:
case 1971:
case 3023:
case 641:
case 786:
case 1818:
case 3617:
case 3405:
case 766:
case 1954:
case 1436:
case 3944:
case 2248:
case 3901:
case 3831:
case 1084:
case 2406:
case 777:
case 3505:
case 1240:
case 1373:
case 2111:
case 2172:
case 1587:
case 1731:
case 54:
case 1291:
case 3160:
case 2349:
case 2221:
case 2734:
case 117:
case 3007:
case 3787:
case 2177:
case 1403:
case 1176:
case 1814:
case 478:
case 2971:
case 2784:
case 2808:
case 1917:
case 643:
case 222:
case 3887:
case 168:
case 3291:
case 3873:
case 4054:
case 1200:
case 2923:
case 3143:
case 464:
case 3336:
case 438:
case 2649:
case 48:
case 2504:
case 2045:
case 3527:
case 3835:
case 1769:
case 3005:
case 2042:
case 1626:
case 3390:
case 1347:
case 2726:
case 3348:
case 1498:
case 1048:
case 1368:
case 2306:
case 1042:
case 3569:
case 779:
case 2229:
case 2794:
case 1924:
case 1448:
case 1884:
case 3879:
case 674:
case 3470:
case 3173:
case 3957:
case 3316:
case 4056:
case 2523:
case 2281:
case 2391:
case 3732:
case 2852:
case 410:
case 1289:
case 2047:
case 272:
case 1743:
case 1840:
case 535:
case 3549:
case 1752:
case 2119:
case 2209:
case 3632:
case 1988:
case 2382:
case 3338:
case 2732:
case 751:
case 2182:
case 2185:
case 3381:
case 3350:
case 3514:
case 3824:
case 3627:
case 967:
case 1910:
case 785:
case 942:
case 640:
case 2244:
case 1942:
case 3550:
case 709:
case 3591:
case 3761:
case 1070:
case 1844:
case 2022:
case 3163:
case 362:
case 3075:
case 1974:
case 240:
case 2998:
case 3843:
case 302:
case 956:
case 165:
case 1456:
case 2366:
case 3215:
case 551:
case 2363:
case 3731:
case 1617:
case 218:
case 443:
case 590:
case 459:
case 356:
case 205:
case 2362:
case 598:
case 3864:
case 3580:
case 908:
case 2098:
case 246:
case 3048:
case 3122:
case 357:
case 3153:
case 1500:
case 645:
case 1896:
case 4041:
case 2705:
case 852:
case 4058:
case 1704:
case 3975:
case 1629:
case 2076:
case 2951:
case 2390:
case 2840:
case 79:
case 3259:
case 1035:
case 2467:
case 696:
case 3524:
case 853:
case 3240:
case 3840:
case 1845:
case 878:
case 1799:
case 2483:
case 1236:
case 1560:
case 1213:
case 2907:
case 1171:
case 157:
case 981:
case 681:
case 1829:
case 1826:
case 2639:
case 1771:
case 2909:
case 704:
case 2568:
case 2763:
case 3578:
case 1735:
case 648:
case 1040:
case 2069:
case 946:
case 934:
case 2320:
case 2378:
case 3472:
case 3267:
case 2709:
case 3532:
case 4005:
case 171:
case 1995:
case 2092:
case 3017:
case 486:
case 3788:
case 2099:
case 1326:
case 3582:
case 417:
case 863:
case 3930:
case 279:
case 1380:
case 972:
case 146:
case 418:
case 3181:
case 991:
case 1759:
case 1570:
case 2635:
case 3394:
case 3511:
case 170:
case 3078:
case 721:
case 716:
case 1553:
case 2488:
case 2161:
case 885:
case 734:
case 865:
case 135:
case 3147:
case 652:
case 877:
case 1772:
case 2329:
case 232:
case 1793:
case 2316:
case 1711:
case 1501:
case 120:
case 262:
case 735:
case 2421:
case 4033:
case 2141:
case 2408:
case 3226:
case 3263:
case 1908:
case 2637:
case 3065:
case 1112:
case 3464:
case 3908:
case 342:
case 3352:
case 1766:
case 2778:
case 372:
case 32:
case 1222:
case 3027:
case 826:
case 1371:
case 1410:
case 1815:
case 3528:
case 1122:
case 85:
case 1535:
case 3166:
case 667:
case 92:
case 3660:
case 964:
case 816:
case 394:
case 2425:
case 1695:
case 2593:
case 2531:
case 2264:
case 1170:
case 1693:
case 1756:
case 1854:
case 664:
case 3597:
case 2206:
case 873:
case 2508:
case 731:
case 2786:
case 2315:
case 2435:
case 3424:
case 2305:
case 2561:
case 3954:
case 2153:
case 3149:
case 3748:
case 2331:
case 2712:
case 3285:
case 453:
case 2300:
case 2043:
case 2367:
case 1663:
case 4044:
case 2959:
case 1834:
case 1506:
case 2724:
case 733:
case 1480:
case 46:
case 3896:
case 1435:
case 2683:
case 3868:
case 2413:
case 1718:
case 3555:
case 1595:
case 1132:
case 3287:
case 1043:
case 3909:
case 2898:
case 1791:
case 2374:
case 1532:
case 861:
case 114:
case 2337:
case 1975:
case 940:
case 2589:
case 2791:
case 1000:
case 2697:
case 1079:
case 3290:
case 1646:
case 3151:
case 622:
case 1457:
case 3058:
case 496:
case 3195:
case 198:
case 3155:
case 1382:
case 2417:
case 3237:
case 678:
case 842:
case 3991:
case 3105:
case 3230:
case 3588:
case 3451:
case 3006:
case 544:
case 2722:
case 708:
case 2747:
case 296:
case 3370:
case 539:
case 3129:
case 2815:
case 2754:
case 3694:
case 1162:
case 1483:
case 2472:
case 796:
case 4024:
case 642:
case 2781:
case 1713:
case 1002:
case 3343:
case 904:
case 2731:
case 2801:
case 783:
case 3401:
case 3255:
case 1726:
case 1154:
case 2906:
case 1430:
case 1980:
case 3745:
case 3273:
case 2416:
case 2979:
case 456:
case 962:
case 3233:
case 3120:
case 2454:
case 2275:
case 1860:
case 3434:
case 3094:
case 3994:
case 1950:
case 832:
case 9:
case 94:
case 725:
case 14:
case 772:
case 935:
case 180:
case 2767:
case 42:
case 3799:
case 3876:
case 3265:
case 1900:
case 517:
case 1078:
case 141:
case 2107:
case 1115:
case 116:
case 3595:
case 2276:
case 2654:
case 3254:
case 2656:
case 3083:
case 3857:
case 677:
case 3942:
case 3796:
case 844:
case 1662:
case 4057:
case 1330:
case 375:
case 1569:
case 3142:
case 1310:
case 2353:
case 1471:
case 3920:
case 2073:
case 3671:
case 2132:
case 93:
case 84:
case 1812:
case 3049:
case 492:
case 1656:
case 3894:
case 131:
case 646:
case 1372:
case 2558:
case 589:
case 3925:
case 3373:
case 2175:
case 1085:
case 1329:
case 3139:
case 1345:
case 1441:
case 813:
case 1263:
case 3057:
case 397:
case 3898:
case 2057:
case 1197:
case 1959:
case 2846:
case 2450:
case 576:
case 28:
case 1527:
case 999:
case 1393:
case 2677:
case 3987:
case 945:
case 3619:
case 3322:
case 683:
case 3542:
case 1261:
case 3221:
case 1992:
case 105:
case 992:
case 2236:
case 874:
case 2873:
case 122:
case 1074:
case 3393:
case 1790:
case 1495:
case 1683:
case 563:
case 1514:
case 1914:
case 317:
case 2894:
case 3939:
case 47:
case 371:
case 301:
case 2984:
case 1561:
case 2922:
case 2217:
case 1383:
case 3148:
case 332:
case 182:
case 2940:
case 1781:
case 4087:
case 3096:
case 70:
case 1198:
case 2880:
case 2565:
case 2025:
case 600:
case 3907:
case 2301:
case 215:
case 3945:
case 1533:
case 2253:
case 2739:
case 2293:
case 1985:
case 2557:
case 3599:
case 2576:
case 284:
case 1578:
case 1591:
case 2996:
case 2773:
case 3508:
case 406:
case 3888:
case 4037:
case 3793:
case 60:
case 2342:
case 3614:
case 103:
case 1005:
case 3360:
case 469:
case 602:
case 2324:
case 482:
case 2407:
case 1586:
case 3813:
case 1169:
case 156:
case 208:
case 809:
case 1004:
case 1709:
case 690:
case 2830:
case 2480:
case 193:
case 2621:
case 2056:
case 2144:
case 2785:
case 522:
case 1404:
case 2573:
case 1856:
case 1494:
case 2651:
case 3657:
case 927:
case 3466:
case 3589:
case 774:
case 2634:
case 2046:
case 2850:
case 718:
case 2509:
case 2650:
case 856:
case 365:
case 3318:
case 504:
case 2931:
case 2926:
case 1616:
case 3600:
case 1979:
case 1102:
case 3779:
case 1765:
case 2805:
case 764:
case 4070:
case 2205:
case 1186:
case 3765:
case 1927:
case 880:
case 2796:
case 3955:
case 2869:
case 833:
case 1208:
case 2673:
case 925:
case 3436:
case 795:
case 2598:
case 540:
case 2424:
case 388:
case 3121:
case 2867:
case 3643:
case 601:
case 1470:
case 2333:
case 3333:
case 1378:
case 1133:
case 975:
case 2822:
case 292:
case 1020:
case 3980:
case 257:
case 2727:
case 616:
case 4092:
case 2728:
case 1463:
case 1613:
case 2492:
case 2600:
case 1758:
case 3537:
case 1750:
case 3882:
case 8:
case 1824:
case 978:
case 2758:
case 184:
case 369:
case 1635:
case 3847:
case 1377:
case 2660:
case 4032:
case 101:
case 1124:
case 1445:
case 1861:
case 413:
case 309:
case 564:
case 390:
case 3950:
case 1001:
case 3680:
case 2115:
case 17:
case 1039:
case 3834:
case 1365:
case 3243:
case 1279:
case 318:
case 588:
case 1564:
case 3324:
case 1789:
case 2126:
case 672:
case 2964:
case 2797:
case 420:
case 2447:
case 3718:
case 78:
case 2247:
case 533:
case 3594:
case 2430:
case 666:
case 3635:
case 1418:
case 1092:
case 1194:
case 2067:
case 2519:
case 1934:
case 2974:
case 3510:
case 1622:
case 476:
case 493:
case 993:
case 277:
case 2197:
case 1801:
case 1238:
case 1120:
case 304:
case 2860:
case 1624:
case 1071:
case 2682:
case 1019:
case 4053:
case 1779:
case 1760:
case 172:
case 883:
case 236:
case 1919:
case 3781:
case 3606:
case 2122:
case 2980:
case 1699:
case 2215:
case 1429:
case 3663:
case 1650:
case 1472:
case 1125:
case 1614:
case 3474:
case 968:
case 909:
case 3062:
case 2453:
case 197:
case 668:
case 276:
case 3216:
case 3929:
case 868:
case 3676:
case 3749:
case 3872:
case 2976:
case 76:
case 2392:
case 395:
case 654:
case 1970:
case 2396:
case 872:
case 3341:
case 1603:
case 2013:
case 2060:
case 2887:
case 3154:
case 2189:
case 2162:
case 2238:
case 1344:
case 299:
case 391:
case 2841:
case 2225:
case 1247:
case 1328:
case 3662:
case 2742:
case 2609:
case 2120:
case 624:
case 3651:
case 140:
case 912:
case 1350:
case 2204:
case 2138:
case 282:
case 2643:
case 3454:
case 4026:
case 3178:
case 3449:
case 3985:
case 2348:
case 4046:
case 1397:
case 81:
case 2543:
case 1158:
case 3533:
case 2735:
case 1776:
case 1009:
case 3376:
case 3811:
case 549:
case 2592:
case 2585:
case 797:
case 1725:
case 855:
case 762:
case 3608:
case 2704:
case 1324:
case 3771:
case 110:
case 466:
case 261:
case 2670:
case 3368:
case 2901:
case 1274:
case 479:
case 1269:
case 3762:
case 3235:
case 2127:
case 1811:
case 1641:
case 3557:
case 2146:
case 1215:
case 939:
case 3715:
case 401:
case 2915:
case 1842:
case 3795:
case 3270:
case 207:
case 2515:
case 3808:
case 2100:
case 3134:
case 3968:
case 3115:
case 1130:
case 1192:
case 3499:
case 1943:
case 595:
case 2577:
case 780:
case 3690:
case 749:
case 3637:
case 3574:
case 1543:
case 1193:
case 3303:
case 2428:
case 746:
case 1831:
case 1153:
case 2936:
case 98:
case 3885:
case 3607:
case 3481:
case 2114:
case 2819:
case 1392:
case 1160:
case 2716:
case 3814:
case 1065:
case 1775:
case 2838:
case 1119:
case 3758:
case 127:
case 2081:
case 3498:
case 1841:
case 684:
case 352:
case 3071:
case 3210:
case 1283:
case 2672:
case 2402:
case 1080:
case 3406:
case 3019:
case 1832:
case 1724:
case 4017:
case 2311:
case 2491:
case 1608:
case 2756:
case 106:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1667779202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,];
var gg_b = "1667775601/";

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
