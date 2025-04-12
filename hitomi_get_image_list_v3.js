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
case 668:
case 2965:
case 948:
case 3181:
case 3052:
case 1894:
case 3263:
case 533:
case 3829:
case 2386:
case 4082:
case 3565:
case 3276:
case 2400:
case 3180:
case 426:
case 2616:
case 3079:
case 779:
case 1897:
case 985:
case 1950:
case 3343:
case 1460:
case 1951:
case 2775:
case 1905:
case 1461:
case 1728:
case 3582:
case 434:
case 4065:
case 140:
case 516:
case 2546:
case 3418:
case 671:
case 2876:
case 2410:
case 3946:
case 2786:
case 2047:
case 2229:
case 308:
case 2026:
case 474:
case 3927:
case 372:
case 55:
case 1328:
case 1691:
case 1803:
case 355:
case 2375:
case 1673:
case 363:
case 3342:
case 295:
case 3743:
case 739:
case 3285:
case 2757:
case 1666:
case 3917:
case 2571:
case 1925:
case 3970:
case 2593:
case 2295:
case 608:
case 3993:
case 3578:
case 1688:
case 3971:
case 4032:
case 655:
case 561:
case 119:
case 3914:
case 663:
case 2514:
case 2172:
case 1284:
case 1038:
case 1442:
case 943:
case 3131:
case 3679:
case 538:
case 3796:
case 1589:
case 368:
case 3895:
case 184:
case 3992:
case 2933:
case 794:
case 2507:
case 3240:
case 884:
case 2647:
case 3241:
case 3907:
case 2592:
case 370:
case 3533:
case 1308:
case 1269:
case 2644:
case 2736:
case 578:
case 2209:
case 0:
case 2173:
case 3360:
case 3198:
case 1091:
case 142:
case 1073:
case 632:
case 3904:
case 2626:
case 554:
case 587:
case 560:
case 1567:
case 4033:
case 842:
case 1779:
case 2021:
case 3175:
case 903:
case 2020:
case 1121:
case 3028:
case 1661:
case 2814:
case 3509:
case 2655:
case 2601:
case 2893:
case 1752:
case 2780:
case 138:
case 2541:
case 838:
case 519:
case 931:
case 861:
case 2781:
case 2817:
case 3608:
case 3207:
case 2870:
case 4009:
case 970:
case 3878:
case 2416:
case 3548:
case 3157:
case 802:
case 102:
case 1490:
case 1043:
case 2919:
case 6:
case 1379:
case 557:
case 584:
case 1466:
case 160:
case 3595:
case 3270:
case 4019:
case 854:
case 887:
case 971:
case 2278:
case 2677:
case 3186:
case 3618:
case 3217:
case 797:
case 860:
case 2807:
case 2610:
case 1225:
case 1987:
case 878:
case 3293:
case 1864:
case 3833:
case 2892:
case 1753:
case 3388:
case 1352:
case 2620:
case 3227:
case 3391:
case 1061:
case 3772:
case 972:
case 955:
case 1858:
case 1502:
case 3738:
case 3882:
case 133:
case 2730:
case 2745:
case 2161:
case 1060:
case 833:
case 1513:
case 225:
case 1299:
case 1101:
case 1155:
case 3008:
case 3224:
case 3529:
case 1594:
case 211:
case 72:
case 2055:
case 1100:
case 3246:
case 908:
case 1937:
case 2444:
case 873:
case 1643:
case 206:
case 58:
case 3338:
case 173:
case 116:
case 932:
case 2331:
case 162:
case 3791:
case 488:
case 1251:
case 2827:
case 1205:
case 3453:
case 210:
case 2576:
case 1177:
case 2011:
case 1110:
case 2447:
case 1934:
case 2824:
case 496:
case 2077:
case 445:
case 1111:
case 2010:
case 2563:
case 85:
case 100:
case 3247:
case 2500:
case 1888:
case 4049:
case 2635:
case 3852:
case 1094:
case 3029:
case 228:
case 3364:
case 4:
case 3900:
case 2908:
case 1622:
case 2725:
case 2501:
case 3879:
case 3367:
case 1097:
case 2113:
case 683:
case 2085:
case 3244:
case 2102:
case 3226:
case 1002:
case 1185:
case 1596:
case 2949:
case 1163:
case 1281:
case 3977:
case 2918:
case 2076:
case 3134:
case 21:
case 485:
case 3518:
case 2446:
case 3764:
case 1280:
case 2252:
case 1176:
case 2577:
case 2847:
case 864:
case 1733:
case 3695:
case 1332:
case 164:
case 2063:
case 2826:
case 567:
case 715:
case 3137:
case 1012:
case 2427:
case 1003:
case 256:
case 3619:
case 3483:
case 345:
case 2844:
case 2112:
case 2574:
case 926:
case 1936:
case 1140:
case 677:
case 3478:
case 2399:
case 3169:
case 4028:
case 97:
case 1141:
case 1765:
case 688:
case 2493:
case 2662:
case 3432:
case 2035:
case 2122:
case 1489:
case 1542:
case 953:
case 722:
case 2414:
case 1975:
case 696:
case 645:
case 1383:
case 2685:
case 3528:
case 2750:
case 135:
case 223:
case 1365:
case 2663:
case 104:
case 86:
case 1954:
case 1986:
case 1464:
case 2806:
case 847:
case 3216:
case 582:
case 637:
case 1023:
case 875:
case 1230:
case 1866:
case 1783:
case 1890:
case 999:
case 383:
case 2350:
case 1382:
case 1891:
case 1603:
case 2305:
case 1873:
case 3156:
case 2715:
case 507:
case 1612:
case 2337:
case 2189:
case 3409:
case 1257:
case 1945:
case 3682:
case 1842:
case 605:
case 471:
case 1930:
case 983:
case 2820:
case 3828:
case 1931:
case 2440:
case 1286:
case 2435:
case 33:
case 535:
case 2334:
case 1193:
case 2441:
case 2070:
case 1422:
case 2167:
case 1275:
case 3220:
case 882:
case 3712:
case 2627:
case 2228:
case 3302:
case 3703:
case 1573:
case 1591:
case 470:
case 1104:
case 2737:
case 626:
case 504:
case 3397:
case 3221:
case 107:
case 1192:
case 2624:
case 403:
case 807:
case 2007:
case 37:
case 552:
case 1329:
case 1107:
case 1064:
case 217:
case 3495:
case 144:
case 634:
case 3579:
case 4052:
case 3150:
case 2158:
case 653:
case 3151:
case 1236:
case 3082:
case 665:
case 1860:
case 996:
case 551:
case 1896:
case 2979:
case 326:
case 2218:
case 977:
case 881:
case 4079:
case 1588:
case 2800:
case 3552:
case 1981:
case 1039:
case 181:
case 2769:
case 2387:
case 2139:
case 3429:
case 3211:
case 3632:
case 2801:
case 2462:
case 2693:
case 334:
case 3065:
case 988:
case 2952:
case 3944:
case 2784:
case 2756:
case 50:
case 3083:
case 2249:
case 3926:
case 2544:
case 2027:
case 374:
case 298:
case 84:
case 2046:
case 455:
case 1124:
case 3255:
case 2787:
case 2811:
case 3947:
case 3201:
case 63:
case 790:
case 2547:
case 463:
case 2877:
case 867:
case 3200:
case 880:
case 167:
case 3322:
case 180:
case 358:
case 2081:
case 2152:
case 1276:
case 900:
case 3659:
case 341:
case 684:
case 657:
case 711:
case 3234:
case 2212:
case 3558:
case 2631:
case 132:
case 2721:
case 3460:
case 2630:
case 2551:
case 3950:
case 1343:
case 2958:
case 1742:
case 3897:
case 1079:
case 2294:
case 108:
case 1262:
case 3999:
case 1418:
case 1924:
case 3666:
case 2436:
case 3126:
case 548:
case 467:
case 863:
case 1285:
case 1342:
case 2321:
case 163:
case 3690:
case 3803:
case 3691:
case 1583:
case 172:
case 2320:
case 2213:
case 872:
case 855:
case 2525:
case 2701:
case 1971:
case 3116:
case 3688:
case 4089:
case 1848:
case 68:
case 2311:
case 2869:
case 1532:
case 3708:
case 2681:
case 3822:
case 987:
case 1917:
case 960:
case 749:
case 1679:
case 2030:
case 1131:
case 3038:
case 1760:
case 236:
case 2045:
case 1914:
case 2475:
case 1130:
case 2031:
case 1428:
case 1145:
case 1761:
case 2989:
case 3269:
case 3823:
case 297:
case 1907:
case 1241:
case 961:
case 3564:
case 2710:
case 131:
case 2964:
case 482:
case 3106:
case 2454:
case 2711:
case 357:
case 168:
case 3349:
case 2774:
case 1904:
case 4064:
case 3073:
case 1198:
case 3443:
case 1819:
case 3090:
case 3066:
case 2457:
case 712:
case 407:
case 530:
case 662:
case 3121:
case 3472:
case 942:
case 2430:
case 3438:
case 2668:
case 2267:
case 1175:
case 2128:
case 3779:
case 4022:
case 2344:
case 3696:
case 1548:
case 2825:
case 435:
case 2347:
case 2264:
case 3752:
case 338:
case 1788:
case 3984:
case 3466:
case 2744:
case 568:
case 843:
case 143:
case 2498:
case 633:
case 1519:
case 302:
case 919:
case 2556:
case 3352:
case 378:
case 3753:
case 3864:
case 2054:
case 1186:
case 1595:
case 360:
case 2923:
case 2149:
case 8:
case 1479:
case 769:
case 3060:
case 1985:
case 3642:
case 333:
case 1882:
case 3858:
case 1:
case 1168:
case 1373:
case 602:
case 3061:
case 1227:
case 1628:
case 2805:
case 4094:
case 2913:
case 1049:
case 3597:
case 1452:
case 1865:
case 4013:
case 1246:
case 3100:
case 2108:
case 98:
case 1529:
case 2481:
case 1008:
case 654:
case 940:
case 3101:
case 3299:
case 464:
case 3251:
case 2537:
case 2912:
case 362:
case 2903:
case 373:
case 185:
case 3503:
case 1338:
case 1883:
case 2036:
case 3250:
case 3512:
case 2657:
case 2316:
case 2239:
case 941:
case 3111:
case 2706:
case 1976:
case 555:
case 572:
case 35:
case 2686:
case 2118:
case 3110:
case 2654:
case 1963:
case 4012:
case 638:
case 967:
case 3778:
case 647:
case 2770:
case 433:
case 1029:
case 4061:
case 94:
case 3732:
case 1852:
case 2880:
case 1465:
case 1901:
case 2771:
case 1247:
case 1789:
case 3596:
case 3013:
case 3185:
case 3002:
case 2961:
case 2405:
case 2568:
case 2960:
case 3968:
case 2450:
case 401:
case 3458:
case 675:
case 3561:
case 534:
case 1549:
case 2371:
case 364:
case 1695:
case 2393:
case 3733:
case 1853:
case 505:
case 798:
case 1911:
case 462:
case 2687:
case 2288:
case 888:
case 877:
case 473:
case 2499:
case 1977:
case 3281:
case 3378:
case 3163:
case 290:
case 1767:
case 2037:
case 574:
case 1483:
case 635:
case 45:
case 558:
case 2415:
case 1974:
case 2704:
case 3012:
case 1137:
case 650:
case 1432:
case 3141:
case 944:
case 60:
case 1629:
case 1169:
case 2346:
case 2324:
case 907:
case 3140:
case 2148:
case 1009:
case 2290:
case 335:
case 2830:
case 1758:
case 2845:
case 2266:
case 461:
case 1920:
case 3872:
case 982:
case 2273:
case 3489:
case 2724:
case 565:
case 717:
case 3464:
case 651:
case 402:
case 2746:
case 2087:
case 478:
case 2557:
case 3231:
case 3543:
case 3873:
case 292:
case 3603:
case 3891:
case 2119:
case 2943:
case 183:
case 57:
case 3890:
case 352:
case 793:
case 3866:
case 3245:
case 460:
case 2238:
case 2637:
case 454:
case 3467:
case 2875:
case 3931:
case 2605:
case 2651:
case 3538:
case 1702:
case 3930:
case 952:
case 199:
case 3114:
case 3945:
case 3658:
case 3257:
case 2531:
case 2243:
case 1409:
case 680:
case 947:
case 3171:
case 2132:
case 2376:
case 2469:
case 3639:
case 3559:
case 96:
case 83:
case 3170:
case 2762:
case 3254:
case 2363:
case 3286:
case 904:
case 1125:
case 2456:
case 2242:
case 1683:
case 935:
case 3843:
case 1419:
case 2990:
case 2973:
case 153:
case 2598:
case 382:
case 2991:
case 1712:
case 484:
case 1313:
case 853:
case 3566:
case 1033:
case 2362:
case 1495:
case 529:
case 2763:
case 2886:
case 4073:
case 3107:
case 442:
case 583:
case 1394:
case 2776:
case 2133:
case 4066:
case 3192:
case 126:
case 3709:
case 826:
case 2868:
case 441:
case 3236:
case 2050:
case 3319:
case 1082:
case 1105:
case 3058:
case 682:
case 3861:
case 2005:
case 1849:
case 3413:
case 537:
case 3748:
case 3980:
case 134:
case 1065:
case 950:
case 2740:
case 964:
case 2581:
case 1429:
case 90:
case 381:
case 2165:
case 2741:
case 1678:
case 1552:
case 1323:
case 3588:
case 577:
case 3412:
case 2261:
case 2183:
case 215:
case 48:
case 2296:
case 2836:
case 3127:
case 3309:
case 588:
case 3268:
case 2437:
case 2341:
case 71:
case 367:
case 2099:
case 1818:
case 1200:
case 3146:
case 3664:
case 1199:
case 1947:
case 1255:
case 951:
case 3795:
case 2335:
case 1633:
case 3348:
case 174:
case 2930:
case 2114:
case 3938:
case 2572:
case 3650:
case 2945:
case 1821:
case 3785:
case 3243:
case 1189:
case 2089:
case 859:
case 3545:
case 3530:
case 992:
case 2559:
case 1071:
case 3762:
case 2170:
case 2171:
case 2422:
case 621:
case 2193:
case 3376:
case 4045:
case 436:
case 3598:
case 3973:
case 2590:
case 282:
case 3991:
case 514:
case 3615:
case 2566:
case 3966:
case 3484:
case 1737:
case 3857:
case 893:
case 2067:
case 3385:
case 729:
case 193:
case 2573:
case 3990:
case 3699:
case 3776:
case 1624:
case 2192:
case 207:
case 1092:
case 117:
case 2064:
case 817:
case 413:
case 1614:
case 2402:
case 2861:
case 3182:
case 4080:
case 2413:
case 2689:
case 2497:
case 1979:
case 2860:
case 2236:
case 2058:
case 737:
case 2039:
case 281:
case 320:
case 3741:
case 1617:
case 1218:
case 1800:
case 2980:
case 1671:
case 1462:
case 1139:
case 2719:
case 796:
case 2127:
case 1784:
case 3260:
case 745:
case 418:
case 886:
case 2667:
case 1874:
case 1604:
case 51:
case 2403:
case 2664:
case 3434:
case 1787:
case 898:
case 1046:
case 2795:
case 3335:
case 1692:
case 1463:
case 2348:
case 198:
case 3340:
case 1953:
case 556:
case 1208:
case 1810:
case 1476:
case 1369:
case 1877:
case 1024:
case 251:
case 128:
case 1253:
case 2888:
case 3392:
case 828:
case 2333:
case 1640:
case 1501:
case 1555:
case 3717:
case 1641:
case 921:
case 2778:
case 3129:
case 3307:
case 3669:
case 479:
case 2968:
case 1085:
case 3450:
case 2561:
case 1113:
case 3996:
case 2013:
case 3961:
case 2002:
case 3714:
case 3405:
case 3451:
case 915:
case 3568:
case 758:
case 1424:
case 2281:
case 4036:
case 2163:
case 2378:
case 1325:
case 3371:
case 264:
case 3393:
case 2332:
case 3034:
case 1577:
case 2176:
case 1847:
case 20:
case 1446:
case 3288:
case 3314:
case 156:
case 49:
case 856:
case 2012:
case 3684:
case 705:
case 598:
case 1112:
case 1279:
case 2859:
case 1399:
case 3069:
case 3324:
case 559:
case 1816:
case 690:
case 2022:
case 3148:
case 1122:
case 1471:
case 1035:
case 1493:
case 2765:
case 2141:
case 1040:
case 4075:
case 3346:
case 1414:
case 1705:
case 2602:
case 1928:
case 2872:
case 2542:
case 3109:
case 3291:
case 3327:
case 1315:
case 2298:
case 3290:
case 2782:
case 823:
case 427:
case 1685:
case 3942:
case 3575:
case 3845:
case 2986:
case 26:
case 593:
case 2954:
case 2365:
case 77:
case 3259:
case 1407:
case 3724:
case 3586:
case 1799:
case 1806:
case 3898:
case 2382:
case 3943:
case 1350:
case 2783:
case 2245:
case 3084:
case 2957:
case 3056:
case 2467:
case 922:
case 2612:
case 753:
case 3727:
case 3557:
case 1715:
case 4086:
case 2543:
case 392:
case 1305:
case 1351:
case 3119:
case 2660:
case 3430:
case 149:
case 3267:
case 3668:
case 1021:
case 976:
case 3128:
case 849:
case 2779:
case 3344:
case 1142:
case 913:
case 3347:
case 3569:
case 69:
case 509:
case 1541:
case 1601:
case 1948:
case 3264:
case 1780:
case 1893:
case 1655:
case 1870:
case 997:
case 3922:
case 1540:
case 1535:
case 1781:
case 1600:
case 327:
case 2969:
case 730:
case 202:
case 2491:
case 3556:
case 1674:
case 3726:
case 3584:
case 1804:
case 2466:
case 703:
case 3636:
case 812:
case 3057:
case 3744:
case 866:
case 2379:
case 3498:
case 166:
case 1919:
case 2043:
case 679:
case 1610:
case 770:
case 1677:
case 1381:
case 3923:
case 287:
case 2523:
case 1380:
case 2352:
case 394:
case 1892:
case 2753:
case 1995:
case 768:
case 3086:
case 1611:
case 924:
case 492:
case 3054:
case 3675:
case 3902:
case 1160:
case 3805:
case 1731:
case 2215:
case 1620:
case 732:
case 3149:
case 3997:
case 2096:
case 1283:
case 1161:
case 3068:
case 2642:
case 1621:
case 1730:
case 233:
case 825:
case 201:
case 3306:
case 918:
case 3481:
case 3716:
case 694:
case 2488:
case 2100:
case 3108:
case 1055:
case 111:
case 3994:
case 1798:
case 273:
case 339:
case 106:
case 763:
case 3036:
case 490:
case 2937:
case 1444:
case 1827:
case 755:
case 772:
case 1074:
case 2251:
case 1426:
case 1331:
case 262:
case 216:
case 3118:
case 3686:
case 2110:
case 39:
case 3654:
case 1576:
case 1265:
case 1846:
case 3239:
case 3316:
case 4037:
case 3899:
case 3706:
case 1077:
case 25:
case 1824:
case 4051:
case 2088:
case 1965:
case 2234:
case 1188:
case 3152:
case 697:
case 241:
case 3939:
case 4050:
case 3630:
case 2460:
case 3505:
case 2237:
case 676:
case 3551:
case 3468:
case 1982:
case 420:
case 2897:
case 869:
case 7:
case 3179:
case 3212:
case 2461:
case 2802:
case 2905:
case 2951:
case 1410:
case 1546:
case 1477:
case 1863:
case 1229:
case 748:
case 624:
case 3599:
case 2673:
case 2691:
case 2328:
case 2803:
case 2915:
case 2144:
case 1026:
case 3436:
case 2666:
case 421:
case 895:
case 785:
case 1527:
case 2126:
case 1044:
case 846:
case 3837:
case 195:
case 1983:
case 979:
case 3321:
case 3223:
case 2059:
case 3869:
case 3377:
case 2708:
case 1978:
case 1571:
case 2925:
case 1841:
case 3680:
case 3701:
case 3525:
case 2688:
case 2287:
case 2116:
case 1517:
case 1932:
case 994:
case 422:
case 1570:
case 3311:
case 324:
case 1138:
case 1420:
case 2072:
case 809:
case 2256:
case 2442:
case 1514:
case 1172:
case 1768:
case 3486:
case 1248:
case 1647:
case 3454:
case 2106:
case 1507:
case 566:
case 3711:
case 284:
case 1933:
case 3301:
case 62:
case 3355:
case 2308:
case 2823:
case 3300:
case 397:
case 3777:
case 3710:
case 1006:
case 927:
case 376:
case 1368:
case 1173:
case 2090:
case 1191:
case 2066:
case 3457:
case 3856:
case 1644:
case 3967:
case 2567:
case 2349:
case 1626:
case 3774:
case 1190:
case 313:
case 3820:
case 1651:
case 1972:
case 2828:
case 2303:
case 1605:
case 3014:
case 1875:
case 122:
case 3189:
case 3337:
case 2797:
case 2409:
case 1243:
case 686:
case 1531:
case 1650:
case 1938:
case 1469:
case 409:
case 1025:
case 914:
case 3070:
case 2078:
case 3440:
case 3093:
case 2448:
case 1363:
case 3435:
case 1762:
case 2794:
case 4006:
case 393:
case 2683:
case 1242:
case 923:
case 1456:
case 1857:
case 1484:
case 1966:
case 3004:
case 2220:
case 1615:
case 253:
case 1973:
case 2703:
case 1598:
case 3646:
case 704:
case 1854:
case 3506:
case 76:
case 2495:
case 2033:
case 1133:
case 3624:
case 2906:
case 747:
case 592:
case 2105:
case 3485:
case 3979:
case 3356:
case 3384:
case 1182:
case 2274:
case 3139:
case 2429:
case 3855:
case 2211:
case 617:
case 1581:
case 3693:
case 3462:
case 3801:
case 751:
case 1740:
case 1988:
case 234:
case 2065:
case 3952:
case 3671:
case 2722:
case 3218:
case 2808:
case 1625:
case 2323:
case 3670:
case 2277:
case 1165:
case 120:
case 91:
case 659:
case 1183:
case 3604:
case 3544:
case 590:
case 1015:
case 3027:
case 1437:
case 1260:
case 1836:
case 2115:
case 2083:
case 3369:
case 446:
case 821:
case 2200:
case 3810:
case 3607:
case 1341:
case 2322:
case 258:
case 121:
case 3953:
case 274:
case 3692:
case 2633:
case 3046:
case 3787:
case 3811:
case 2255:
case 2947:
case 2199:
case 1669:
case 3194:
case 1770:
case 237:
case 2900:
case 425:
case 3908:
case 614:
case 781:
case 3640:
case 2955:
case 2901:
case 2247:
case 2648:
case 1771:
case 1392:
case 998:
case 1793:
case 3253:
case 328:
case 411:
case 1568:
case 1451:
case 1304:
case 4055:
case 4001:
case 3197:
case 2549:
case 2367:
case 2879:
case 1450:
case 2244:
case 3085:
case 1960:
case 986:
case 1687:
case 1288:
case 3446:
case 3252:
case 2911:
case 1034:
case 74:
case 288:
case 4074:
case 3063:
case 1317:
case 1370:
case 277:
case 3424:
case 2134:
case 3918:
case 767:
case 296:
case 4077:
case 4010:
case 689:
case 1037:
case 1656:
case 2767:
case 623:
case 3826:
case 2137:
case 1415:
case 410:
case 3427:
case 2169:
case 4020:
case 2629:
case 3040:
case 3662:
case 2048:
case 3035:
case 3122:
case 3471:
case 3417:
case 1148:
case 3041:
case 1425:
case 2206:
case 3470:
case 1324:
case 4021:
case 1069:
case 2739:
case 1845:
case 1266:
case 1575:
case 389:
case 2758:
case 3685:
case 3750:
case 2528:
case 2009:
case 323:
case 1273:
case 1831:
case 656:
case 3414:
case 3799:
case 3806:
case 2187:
case 3407:
case 3123:
case 3663:
case 744:
case 1634:
case 3305:
case 782:
case 2156:
case 1727:
case 892:
case 1238:
case 229:
case 1056:
case 1084:
case 3350:
case 2019:
case 283:
case 3020:
case 1431:
case 2204:
case 3814:
case 3142:
case 1326:
case 719:
case 2649:
case 524:
case 1128:
case 349:
case 1668:
case 1430:
case 489:
case 3600:
case 2941:
case 1922:
case 2788:
case 3948:
case 3893:
case 3780:
case 1264:
case 2832:
case 3541:
case 243:
case 366:
case 312:
case 625:
case 1057:
case 1744:
case 414:
case 597:
case 3674:
case 1556:
case 2157:
case 2519:
case 611:
case 2271:
case 1747:
case 1086:
case 894:
case 576:
case 3995:
case 194:
case 2833:
case 3380:
case 1923:
case 513:
case 3278:
case 2186:
case 3610:
case 666:
case 179:
case 2390:
case 995:
case 1850:
case 612:
case 2985:
case 946:
case 3161:
case 52:
case 325:
case 3196:
case 1913:
case 2049:
case 1851:
case 3585:
case 3731:
case 2227:
case 2391:
case 2373:
case 428:
case 311:
case 3055:
case 2962:
case 3001:
case 2452:
case 1480:
case 1481:
case 3562:
case 1306:
case 2759:
case 4085:
case 1903:
case 3331:
case 2791:
case 3426:
case 518:
case 1815:
case 1657:
case 839:
case 1036:
case 2338:
case 139:
case 2790:
case 3330:
case 285:
case 740:
case 1706:
case 2976:
case 2359:
case 2453:
case 248:
case 310:
case 3846:
case 3576:
case 1654:
case 3011:
case 456:
case 3447:
case 3400:
case 1081:
case 3188:
case 3616:
case 12:
case 3401:
case 3862:
case 1080:
case 2181:
case 2263:
case 3386:
case 3775:
case 1631:
case 1720:
case 1550:
case 2449:
case 1203:
case 2079:
case 3357:
case 2742:
case 1645:
case 3982:
case 3885:
case 906:
case 1721:
case 2946:
case 1599:
case 3411:
case 539:
case 3754:
case 2262:
case 3047:
case 1834:
case 3229:
case 208:
case 3863:
case 1294:
case 75:
case 3606:
case 486:
case 3477:
case 2418:
case 3546:
case 4024:
case 346:
case 1321:
case 263:
case 59:
case 3983:
case 2342:
case 2743:
case 609:
case 3044:
case 2285:
case 773:
case 1436:
case 1202:
case 716:
case 2583:
case 4046:
case 1320:
case 272:
case 255:
case 3375:
case 124:
case 459:
case 1311:
case 4014:
case 3570:
case 3840:
case 3932:
case 824:
case 2993:
case 2848:
case 3517:
case 3835:
case 1755:
case 1525:
case 1701:
case 1680:
case 2652:
case 2971:
case 2917:
case 3841:
case 3571:
case 1681:
case 3978:
case 2532:
case 3593:
case 3016:
case 1869:
case 1377:
case 3768:
case 646:
case 136:
case 3421:
case 695:
case 1030:
case 4070:
case 2796:
case 4093:
case 2145:
case 3420:
case 1031:
case 2130:
case 1475:
case 2914:
case 1222:
case 231:
case 1710:
case 2907:
case 2241:
case 1777:
case 2533:
case 1300:
case 1355:
case 4004:
case 1301:
case 3933:
case 2992:
case 1711:
case 1454:
case 778:
case 3507:
case 3248:
case 1964:
case 1486:
case 113:
case 1774:
case 3626:
case 2904:
case 4092:
case 2396:
case 1856:
case 1884:
case 949:
case 3191:
case 3209:
case 1098:
case 4007:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744441201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,];
var gg_b = "1744441201/";

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
