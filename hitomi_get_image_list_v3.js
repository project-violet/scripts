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
case 2425:
case 1740:
case 1825:
case 2159:
case 2244:
case 68:
case 1230:
case 1610:
case 1527:
case 3273:
case 3353:
case 3281:
case 3010:
case 155:
case 312:
case 613:
case 742:
case 572:
case 792:
case 3929:
case 2707:
case 968:
case 2072:
case 1525:
case 3070:
case 1827:
case 245:
case 295:
case 2427:
case 3709:
case 2927:
case 164:
case 304:
case 379:
case 2587:
case 2974:
case 418:
case 283:
case 193:
case 143:
case 2053:
case 2310:
case 3589:
case 2208:
case 2885:
case 3312:
case 3443:
case 1514:
case 3943:
case 21:
case 1754:
case 1574:
case 2887:
case 676:
case 1487:
case 1066:
case 758:
case 253:
case 2250:
case 3088:
case 2585:
case 1139:
case 2692:
case 3690:
case 234:
case 1814:
case 1785:
case 3743:
case 124:
case 2195:
case 489:
case 719:
case 2774:
case 1013:
case 1270:
case 588:
case 1073:
case 3030:
case 1308:
case 2032:
case 459:
case 646:
case 3321:
case 1954:
case 696:
case 4044:
case 3146:
case 558:
case 2261:
case 2405:
case 197:
case 2905:
case 2292:
case 1119:
case 3290:
case 2686:
case 772:
case 4086:
case 3184:
case 2840:
case 1507:
case 1440:
case 1940:
case 2326:
case 1469:
case 310:
case 1969:
case 839:
case 2068:
case 3842:
case 790:
case 2650:
case 3409:
case 2330:
case 3909:
case 4008:
case 257:
case 2608:
case 275:
case 1206:
case 1807:
case 2407:
case 2907:
case 3729:
case 281:
case 191:
case 141:
case 2569:
case 1385:
case 3694:
case 1111:
case 2910:
case 1094:
case 3147:
case 812:
case 608:
case 154:
case 3912:
case 3412:
case 1786:
case 2149:
case 2254:
case 3768:
case 66:
case 1570:
case 2861:
case 133:
case 3533:
case 1461:
case 1708:
case 804:
case 3401:
case 1510:
case 2314:
case 3972:
case 3472:
case 2828:
case 1387:
case 2793:
case 1870:
case 2685:
case 3953:
case 3453:
case 4085:
case 2906:
case 70:
case 1207:
case 3566:
case 1674:
case 530:
case 403:
case 2726:
case 263:
case 221:
case 1205:
case 3138:
case 1888:
case 2892:
case 235:
case 3689:
case 1992:
case 942:
case 992:
case 2988:
case 1089:
case 1234:
case 1614:
case 1506:
case 3267:
case 3890:
case 970:
case 4087:
case 2240:
case 2687:
case 3866:
case 2269:
case 3242:
case 469:
case 2926:
case 2426:
case 568:
case 3813:
case 1826:
case 3753:
case 125:
case 3581:
case 3573:
case 50:
case 2706:
case 1225:
case 990:
case 2307:
case 2844:
case 3513:
case 1944:
case 1792:
case 1131:
case 2430:
case 3873:
case 3180:
case 1830:
case 1198:
case 2182:
case 3432:
case 1593:
case 810:
case 2850:
case 3642:
case 1950:
case 4069:
case 1450:
case 3468:
case 1042:
case 3118:
case 3289:
case 1986:
case 3007:
case 1354:
case 3921:
case 1274:
case 3552:
case 636:
case 1122:
case 3665:
case 919:
case 3178:
case 1065:
case 223:
case 728:
case 261:
case 3701:
case 2285:
case 1908:
case 2009:
case 1408:
case 274:
case 2586:
case 820:
case 1464:
case 2864:
case 3437:
case 3937:
case 2251:
case 2439:
case 1038:
case 3300:
case 1839:
case 2623:
case 1091:
case 4023:
case 1114:
case 2016:
case 3691:
case 1349:
case 2564:
case 3278:
case 1360:
case 348:
case 398:
case 3435:
case 3935:
case 2185:
case 14:
case 3904:
case 28:
case 1045:
case 3855:
case 1683:
case 634:
case 3071:
case 276:
case 1127:
case 3316:
case 352:
case 1323:
case 653:
case 3557:
case 3948:
case 2649:
case 3662:
case 1125:
case 3555:
case 470:
case 2859:
case 3280:
case 2696:
case 1047:
case 1231:
case 683:
case 492:
case 3415:
case 296:
case 2331:
case 3477:
case 3977:
case 2398:
case 806:
case 1107:
case 2541:
case 211:
case 1303:
case 3165:
case 1622:
case 2419:
case 3363:
case 1819:
case 1105:
case 472:
case 3884:
case 1134:
case 860:
case 3748:
case 2841:
case 1759:
case 2651:
case 490:
case 2169:
case 822:
case 3247:
case 1080:
case 1211:
case 1631:
case 681:
case 4082:
case 3899:
case 1698:
case 2595:
case 2154:
case 1056:
case 3320:
case 3737:
case 657:
case 1764:
case 4003:
case 1497:
case 3735:
case 1995:
case 1202:
case 3599:
case 789:
case 901:
case 687:
case 3245:
case 3424:
case 3924:
case 378:
case 1283:
case 518:
case 1219:
case 1782:
case 1923:
case 2823:
case 2037:
case 320:
case 1703:
case 26:
case 40:
case 432:
case 848:
case 208:
case 703:
case 468:
case 1511:
case 2339:
case 852:
case 3547:
case 2295:
case 1802:
case 3562:
case 627:
case 635:
case 3720:
case 3337:
case 2722:
case 1170:
case 501:
case 3133:
case 3655:
case 1996:
case 1496:
case 3335:
case 2911:
case 3847:
case 2896:
case 1110:
case 1502:
case 102:
case 13:
case 3657:
case 1057:
case 362:
case 2849:
case 1949:
case 2048:
case 3458:
case 2161:
case 4059:
case 1751:
case 2659:
case 338:
case 529:
case 1193:
case 2771:
case 2783:
case 3878:
case 2551:
case 1397:
case 2422:
case 306:
case 166:
case 2077:
case 2017:
case 2641:
case 1749:
case 880:
case 3152:
case 4041:
case 2150:
case 2075:
case 3578:
case 360:
case 1760:
case 609:
case 1619:
case 2711:
case 1239:
case 707:
case 3019:
case 1796:
case 3684:
case 2186:
case 1084:
case 3856:
case 1046:
case 1903:
case 3646:
case 2259:
case 674:
case 3315:
case 3173:
case 2931:
case 2431:
case 1130:
case 3880:
case 3699:
case 3257:
case 1898:
case 623:
case 2998:
case 1482:
case 1982:
case 322:
case 1723:
case 1341:
case 667:
case 769:
case 3317:
case 503:
case 1126:
case 430:
case 2503:
case 3113:
case 3375:
case 1531:
case 3463:
case 2319:
case 1598:
case 2582:
case 4095:
case 3263:
case 2323:
case 704:
case 3129:
case 1559:
case 3955:
case 3455:
case 4071:
case 1696:
case 4011:
case 2047:
case 2611:
case 1719:
case 3957:
case 482:
case 712:
case 3457:
case 1282:
case 392:
case 2298:
case 693:
case 3049:
case 2062:
case 1649:
case 2125:
case 1203:
case 3658:
case 1660:
case 1859:
case 2959:
case 1058:
case 2459:
case 1439:
case 3535:
case 671:
case 1302:
case 3504:
case 2464:
case 1187:
case 2964:
case 1864:
case 685:
case 1251:
case 664:
case 2797:
case 3347:
case 1311:
case 3835:
case 2539:
case 29:
case 3143:
case 18:
case 3804:
case 905:
case 599:
case 2174:
case 868:
case 1076:
case 3537:
case 779:
case 388:
case 2360:
case 448:
case 2222:
case 1154:
case 2056:
case 1249:
case 1603:
case 1260:
case 1322:
case 2497:
case 3003:
case 939:
case 3524:
case 3446:
case 2997:
case 1296:
case 2080:
case 2211:
case 2631:
case 3999:
case 1682:
case 2698:
case 1595:
case 647:
case 830:
case 697:
case 749:
case 2271:
case 478:
case 3200:
case 3318:
case 2495:
case 2995:
case 1895:
case 27:
case 3620:
case 2107:
case 3517:
case 1541:
case 3276:
case 3356:
case 3575:
case 2303:
case 2622:
case 3380:
case 196:
case 3109:
case 146:
case 504:
case 1398:
case 3877:
case 2382:
case 1140:
case 2441:
case 3875:
case 2759:
case 710:
case 480:
case 390:
case 1169:
case 256:
case 1919:
case 3515:
case 1223:
case 3216:
case 3484:
case 3757:
case 3577:
case 2134:
case 1128:
case 3172:
case 1983:
case 1483:
case 1471:
case 2055:
case 3558:
case 1596:
case 2802:
case 1849:
case 539:
case 2449:
case 3962:
case 2949:
case 870:
case 1048:
case 3059:
case 2960:
case 2583:
case 1659:
case 2751:
case 2996:
case 2496:
case 3947:
case 1911:
case 3112:
case 2502:
case 202:
case 2057:
case 3576:
case 1241:
case 3217:
case 3064:
case 684:
case 3355:
case 420:
case 1731:
case 2639:
case 2188:
case 912:
case 3780:
case 3438:
case 2782:
case 1823:
case 3991:
case 3491:
case 888:
case 108:
case 2359:
case 368:
case 654:
case 3635:
case 3215:
case 226:
case 3277:
case 30:
case 332:
case 3516:
case 3738:
case 136:
case 1431:
case 2130:
case 3563:
case 3791:
case 1882:
case 2898:
case 1998:
case 2099:
case 2982:
case 3248:
case 3456:
case 3956:
case 2403:
case 3097:
case 1803:
case 1697:
case 1259:
case 1379:
case 2531:
case 3863:
case 3384:
case 2598:
case 3095:
case 2341:
case 2126:
case 819:
case 1108:
case 3204:
case 1702:
case 3677:
case 3399:
case 3536:
case 631:
case 3745:
case 2193:
case 4079:
case 3478:
case 328:
case 2679:
case 1922:
case 949:
case 1783:
case 1422:
case 2619:
case 1711:
case 3918:
case 4019:
case 872:
case 2395:
case 1186:
case 3836:
case 3041:
case 3520:
case 2522:
case 2451:
case 2951:
case 3675:
case 1310:
case 3135:
case 2606:
case 4006:
case 479:
case 803:
case 1974:
case 3221:
case 318:
case 293:
case 798:
case 3989:
case 3092:
case 3489:
case 962:
case 2688:
case 2139:
case 1692:
case 1286:
case 1914:
case 3137:
case 938:
case 2066:
case 1370:
case 3268:
case 2610:
case 3494:
case 3994:
case 412:
case 782:
case 3767:
case 1012:
case 1734:
case 3612:
case 3148:
case 2825:
case 3529:
case 69:
case 64:
case 3742:
case 1244:
case 1661:
case 1427:
case 404:
case 3366:
case 3028:
case 3672:
case 1707:
case 1072:
case 4070:
case 2226:
case 550:
case 2507:
case 3117:
case 2052:
case 1141:
case 2940:
case 3942:
case 1068:
case 67:
case 1869:
case 297:
case 1905:
case 247:
case 922:
case 2288:
case 2805:
case 3794:
case 2119:
case 807:
case 3086:
case 2807:
case 2693:
case 1540:
case 4093:
case 801:
case 3465:
case 181:
case 3965:
case 291:
case 241:
case 216:
case 3008:
case 1727:
case 2505:
case 175:
case 2206:
case 3177:
case 552:
case 2534:
case 1554:
case 656:
case 3352:
case 499:
case 449:
case 1228:
case 778:
case 2626:
case 2270:
case 2350:
case 4026:
case 3124:
case 3201:
case 906:
case 2386:
case 359:
case 960:
case 2954:
case 3044:
case 1261:
case 2630:
case 3789:
case 4030:
case 1032:
case 3632:
case 3212:
case 3176:
case 303:
case 3713:
case 3209:
case 1685:
case 3394:
case 2588:
case 3085:
case 1043:
case 1906:
case 1406:
case 3643:
case 3966:
case 3466:
case 1240:
case 1687:
case 614:
case 982:
case 2888:
case 3773:
case 3781:
case 135:
case 1892:
case 1327:
case 2234:
case 2614:
case 2506:
case 2625:
case 1528:
case 1149:
case 4025:
case 3752:
case 560:
case 2750:
case 2570:
case 1861:
case 3158:
case 2461:
case 1410:
case 3501:
case 2111:
case 1910:
case 2094:
case 1196:
case 254:
case 2786:
case 3629:
case 1828:
case 2387:
case 1029:
case 329:
case 2428:
case 1793:
case 3433:
case 2870:
case 3933:
case 1470:
case 2183:
case 1970:
case 2708:
case 4027:
case 3801:
case 405:
case 2510:
case 3100:
case 284:
case 1508:
case 4005:
case 1710:
case 2634:
case 2214:
case 1886:
case 4034:
case 3040:
case 439:
case 1669:
case 2761:
case 3868:
case 2950:
case 1808:
case 1009:
case 2408:
case 3243:
case 1586:
case 4007:
case 2728:
case 3821:
case 2893:
case 2354:
case 2274:
case 1550:
case 1770:
case 3733:
case 161:
case 237:
case 1305:
case 2227:
case 2530:
case 600:
case 1706:
case 3367:
case 3229:
case 109:
case 369:
case 2340:
case 3342:
case 3413:
case 1426:
case 2369:
case 3913:
case 1430:
case 1788:
case 3481:
case 3473:
case 2830:
case 3832:
case 1182:
case 2225:
case 980:
case 3054:
case 666:
case 1307:
case 520:
case 3365:
case 2526:
case 2444:
case 231:
case 1103:
case 859:
case 2944:
case 93:
case 2088:
case 3585:
case 2889:
case 3692:
case 3286:
case 3914:
case 827:
case 2372:
case 2252:
case 2666:
case 3887:
case 4066:
case 652:
case 3250:
case 3053:
case 3885:
case 1653:
case 914:
case 57:
case 74:
case 2443:
case 2312:
case 2006:
case 2943:
case 279:
case 3474:
case 1221:
case 3974:
case 715:
case 485:
case 844:
case 586:
case 3927:
case 2709:
case 464:
case 926:
case 204:
case 1366:
case 1672:
case 2929:
case 1829:
case 3628:
case 2213:
case 4033:
case 1765:
case 1494:
case 1994:
case 2281:
case 477:
case 455:
case 3705:
case 3306:
case 212:
case 3012:
case 1767:
case 2157:
case 1612:
case 3734:
case 3925:
case 1148:
case 3159:
case 1061:
case 1742:
case 3661:
case 861:
case 2729:
case 1621:
case 3907:
case 1965:
case 491:
case 1008:
case 1809:
case 375:
case 1381:
case 1373:
case 3608:
case 1253:
case 2567:
case 1177:
case 2652:
case 4052:
case 3725:
case 1942:
case 351:
case 1050:
case 3068:
case 1175:
case 1313:
case 3869:
case 1668:
case 2842:
case 756:
case 447:
case 387:
case 3686:
case 3434:
case 678:
case 3393:
case 2321:
case 3197:
case 3644:
case 1789:
case 2681:
case 2673:
case 650:
case 3032:
case 1212:
case 3714:
case 3554:
case 1272:
case 3774:
case 2233:
case 2613:
case 4013:
case 809:
case 680:
case 1466:
case 2329:
case 2866:
case 853:
case 3269:
case 2242:
case 1553:
case 2138:
case 1781:
case 3892:
case 1773:
case 3488:
case 3327:
case 834:
case 4089:
case 3988:
case 1990:
case 2890:
case 2267:
case 1176:
case 2074:
case 3325:
case 2566:
case 883:
case 2265:
case 103:
case 1713:
case 1209:
case 3592:
case 1853:
case 2953:
case 3906:
case 3406:
case 2590:
case 2472:
case 3029:
case 129:
case 1433:
case 3470:
case 1389:
case 94:
case 1801:
case 1512:
case 3314:
case 895:
case 620:
case 845:
case 3528:
case 2162:
case 2025:
case 1752:
case 3861:
case 433:
case 3160:
case 1501:
case 3410:
case 702:
case 2412:
case 1609:
case 2701:
case 766:
case 875:
case 514:
case 857:
case 3586:
case 2007:
case 3993:
case 1821:
case 2921:
case 881:
case 2421:
case 2665:
case 3550:
case 3770:
case 2178:
case 4065:
case 367:
case 2005:
case 3710:
case 53:
case 502:
case 1136:
case 1452:
case 1521:
case 1952:
case 3640:
case 239:
case 2852:
case 3287:
case 851:
case 2642:
case 1868:
case 1069:
case 4042:
case 2881:
case 3930:
case 3788:
case 1981:
case 3182:
case 1832:
case 956:
case 2932:
case 1790:
case 606:
case 3654:
case 431:
case 2513:
case 3103:
case 526:
case 7:
case 425:
case 2753:
case 2573:
case 3305:
case 1532:
case 3334:
case 1367:
case 1229:
case 1342:
case 1413:
case 3696:
case 2280:
case 2011:
case 4047:
case 547:
case 1096:
case 597:
case 777:
case 1957:
case 1457:
case 3282:
case 2857:
case 142:
case 1049:
case 2717:
case 2448:
case 2376:
case 1848:
case 3660:
case 3203:
case 2775:
case 3058:
case 1060:
case 1600:
case 1263:
case 1338:
case 3000:
case 785:
case 2715:
case 516:
case 252:
case 764:
case 1391:
case 4045:
case 1548:
case 1129:
case 541:
case 3779:
case 2855:
case 771:
case 1455:
case 1347:
case 1835:
case 3185:
case 86:
case 44:
case 49:
case 965:
case 1143:
case 524:
case 1537:
case 808:
case 313:
case 612:
case 298:
case 2724:
case 573:
case 2218:
case 1535:
case 1236:
case 2691:
case 1799:
case 35:
case 1504:
case 1837:
case 1345:
case 3383:
case 3251:
case 158:
case 604:
case 119:
case 2546:
case 2424:
case 773:
case 2924:
case 3597:
case 724:
case 2599:
case 2737:
case 2656:
case 3249:
case 3260:
case 3897:
case 3322:
case 2247:
case 2031:
case 3739:
case 1499:
case 1999:
case 2098:
case 2899:
case 3682:
case 1817:
case 3140:
case 2748:
case 3841:
case 2917:
case 1875:
case 1051:
case 2142:
case 2475:
case 190:
case 3169:
case 747:
case 3419:
case 555:
case 577:
case 649:
case 317:
case 699:
case 3223:
case 2167:
case 1636:
case 1577:
case 2884:
case 1620:
case 3020:
case 1755:
case 250:
case 311:
case 2678:
case 2165:
case 3979:
case 1380:
case 2415:
case 716:
case 1815:
case 2477:
case 1877:
case 2584:
case 3849:
case 1648:
case 3048:
case 1462:
case 3297:
case 733:
case 3659:
case 1718:
case 1947:
case 1500:
case 2299:
case 1112:
case 2657:
case 2304:
case 2736:
case 4057:
case 754:
case 262:
case 2562:
case 2845:
case 3549:
case 1445:
case 1945:
case 3722:
case 3471:
case 4055:
case 1558:
case 3560:
case 2400:
case 1101:
case 1800:
case 3295:
case 784:
case 3902:
case 876:
case 971:
case 1876:
case 2976:
case 2476:
case 308:
case 168:
case 1215:
case 1153:
case 2538:
case 1635:
case 88:
case 1604:
case 1516:
case 3004:
case 985:
case 3523:
case 1576:
case 3664:
case 3241:
case 1637:
case 2166:
case 1217:
case 605:
case 531:
case 1355:
case 220:
case 3731:
case 2838:
case 2039:
case 1780:
case 1438:
case 3798:
case 2891:
case 2284:
case 1991:
case 955:
case 3823:
case 1816:
case 2463:
case 4:
case 1863:
case 1384:
case 916:
case 1095:
case 2776:
case 1624:
case 3024:
case 2255:
case 3503:
case 1980:
case 2315:
case 2181:
case 3931:
case 2880:
case 3431:
case 1132:
case 947:
case 997:
case 2377:
case 2257:
case 3498:
case 222:
case 2856:
case 1248:
case 1456:
case 1097:
case 4046:
case 3144:
case 3697:
case 3803:
case 731:
case 3259:
case 2818:
case 1418:
case 1747:
case 554:
case 2684:
case 3186:
case 3017:
case 1520:
case 1041:
case 1168:
case 400:
case 3851:
case 2578:
case 2758:
case 924:
case 1615:
case 3108:
case 1235:
case 3015:
case 466:
case 2700:
case 1677:
case 1204:
case 846:
case 1399:
case 1121:
case 1745:
case 2920:
case 973:
case 1820:
case 811:
case 3783:
case 1346:
case 3771:
case 3422:
case 3551:
case 2878:
case 2537:
case 288:
case 783:
case 3360:
case 1278:
case 148:
case 1724:
case 3396:
case 2347:
case 2835:
case 3539:
case 826:
case 2143:
case 1904:
case 48:
case 3795:
case 3464:
case 3964:
case 1937:
case 2746:
case 3839:
case 2535:
case 734:
case 1691:
case 2504:
case 4016:
case 2049:
case 3741:
case 1376:
case 3125:
case 1662:
case 2658:
case 1775:
case 2060:
case 3459:
case 551:
case 1280:
case 802:
case 83:
case 3231:
case 1194:
case 618:
case 927:
case 935:
case 182:
case 1857:
case 3045:
case 921:
case 1645:
case 963:
case 2129:
case 2955:
case 581:
case 1083:
case 1071:
case 795:
case 476:
case 2263:
case 745:
case 557:
case 814:
case 3127:
case 1316:
case 1002:
case 2391:
case 1557:
case 3602:
case 689:
case 356:
case 3018:
case 1363:
case 417:
case 1238:
case 2515:
case 2484:
case 2216:
case 2757:
case 2577:
case 3441:
case 1917:
case 3759:
case 2875:
case 3579:
case 751:
case 180:
case 1475:
case 1142:
case 240:
case 1975:
case 2380:
case 1415:
case 1915:
case 2815:
case 775:
case 446:
case 545:
case 2877:
case 3382:
case 2620:
case 2356:
case 2755:
case 150:
case 2575:
case 1165:
case 2200:
case 2318:
case 974:
case 1735:
case 3995:
case 37:
case 1704:
case 219:
case 961:
case 923:
case 1546:
case 178:
case 1680:
case 3211:
case 2082:
case 1098:
case 1899:
case 3698:
case 1737:
case 2258:
case 2003:
case 3497:
case 2946:
case 2524:
case 553:
case 2215:
case 1538:
case 2635:
case 4035:
case 89:
case 326:
case 84:
case 1763:
case 46:
case 2277:
case 2357:
case 1591:
case 3106:
case 509:
case 408:
case 3359:
case 3279:
case 3639:
case 3219:
case 3188:
case 1916:
case 1416:
case 1891:
case 3782:
case 1284:
case 2991:
case 2816:
case 4037:
case 2217:
case 2355:
case 3703:
case 120:
case 3110:
case 3502:
case 1299:
case 603:
case 2112:
case 1304:
case 33:
case 162:
case 953:
case 3449:
case 4048:
case 1458:
case 3571:
case 1246:
case 1900:
case 2800:
case 744:
case 815:
case 983:
case 1845:
case 2445:
case 2172:
case 2945:
case 1720:
case 561:
case 2224:
case 3055:
case 3170:
case 1133:
case 4017:
case 3749:
case 2041:
case 3451:
case 4075:
case 3951:
case 1324:
case 3760:
case 160:
case 3239:
case 1818:
case 3796:
case 669:
case 2418:
case 2747:
case 1436:
case 3395:
case 1684:
case 1420:
case 2745:
case 1920:
case 2820:
case 3193:
case 761:
case 228:
case 2346:
case 4015:
case 1700:
case 42:
case 2677:
case 2204:
case 886:
case 594:
case 3341:
case 1776:
case 607:
case 3126:
case 230:
case 1113:
case 1255:
case 1463:
case 87:
case 3531:
case 2863:
case 2384:
case 975:
case 1856:
case 3403:
case 1646:
case 2738:
case 1315:
case 436:
case 1880:
case 601:
case 1257:
case 3099:
case 987:
case 122:
case 3982:
case 2366:
case 1429:
case 1929:
case 2829:
case 3525:
case 371:
case 1633:
case 1213:
case 1155:
case 3226:
case 3670:
case 2765:
case 511:
case 96:
case 495:
case 1594:
case 1709:
case 364:
case 2390:
case 3740:
case 2148:
case 2061:
case 2494:
case 517:
case 2994:
case 854:
case 1281:
case 377:
case 1273:
case 355:
case 2767:
case 1372:
case 1666:
case 2137:
case 3574:
case 453:
case 2333:
case 2989:
case 2489:
case 3139:
case 1690:
case 3090:
case 3814:
case 3293:
case 483:
case 393:
case 3361:
case 3985:
case 3485:
case 4053:
case 1312:
case 2104:
case 1943:
case 3514:
case 41:
case 78:
case 3081:
case 3073:
case 1681:
case 2789:
case 1030:
case 2212:
case 1199:
case 3787:
case 259:
case 1321:
case 1146:
case 2044:
case 2201:
case 324:
case 3386:
case 58:
case 1743:
case 825:
case 289:
case 1613:
case 3626:
case 3350:
case 3270:
case 513:
case 576:
case 3505:
case 2381:
case 2373:
case 2253:
case 796:
case 1567:
case 3206:
case 3534:
case 4021:
case 1729:
case 3179:
case 711:
case 391:
case 1865:
case 1542:
case 341:
case 397:
case 619:
case 3288:
case 487:
case 2794:
case 2086:
case 2467:
case 3834:
case 1652:
case 3507:
case 3440:
case 2942:
case 451:
case 3469:
case 2313:
case 2175:
case 2442:
case 1842:
case 2801:
case 3627:
case 864:
case 105:
case 1401:
case 444:
case 885:
case 1972:
case 1145:
case 1472:
case 3928:
case 4029:
case 3428:
case 229:
case 3870:
case 1833:
case 3111:
case 95:
case 877:
case 2812:
case 354:
case 3786:
case 1343:
case 1412:
case 668:
case 2572:
case 1768:
case 3570:
case 3961:
case 333:
case 60:
case 632:
case 3888:
case 3205:
case 1689:
case 536:
case 2773:
case 427:
case 435:
case 3992:
case 2490:
case 1014:
case 1267:
case 2966:
case 2466:
case 1329:
case 1242:
case 2209:
case 3588:
case 2394:
case 1953:
case 1453:
case 2085:
case 976:
case 2643:
case 2176:
case 843:
case 1074:
case 1265:
case 708:
case 2713:
case 3225:
case 2766:
case 331:
case 3526:
case 3944:
case 1513:
case 1873:
case 3131:
case 3792:
case 1881:
case 1309:
case 3830:
case 1180:
case 2481:
case 2832:
case 917:
case 628:
case 2229:
case 409:
case 911:
case 873:
case 2342:
case 2913:
case 508:
case 3826:
case 1753:
case 3227:
case 824:
case 3530:
case 2532:
case 946:
case 891:
case 2821:
case 3354:
case 3893:
case 2120:
case 1421:
case 1665:
case 3122:
case 201:
case 3065:
case 1178:
case 2733:
case 461:
case 1701:
case 3908:
case 4009:
case 474:
case 2040:
case 2452:
case 2521:
case 2952:
case 139:
case 1852:
case 2868:
case 2069:
case 3042:
case 1468:
case 3450:
case 1289:
case 3214:
case 1712:
case 3486:
case 3986:
case 1034:
case 630:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760187601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,];
var gg_b = "1760187601/";

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
