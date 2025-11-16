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
case 3864:
case 2274:
case 2853:
case 937:
case 479:
case 1041:
case 1564:
case 1088:
case 95:
case 2534:
case 4042:
case 1196:
case 1230:
case 297:
case 2307:
case 2487:
case 2059:
case 955:
case 224:
case 312:
case 1219:
case 871:
case 2226:
case 3146:
case 1180:
case 2260:
case 3870:
case 3029:
case 998:
case 3912:
case 457:
case 2895:
case 215:
case 2077:
case 3596:
case 3740:
case 423:
case 549:
case 2754:
case 3015:
case 3256:
case 2153:
case 1880:
case 2032:
case 3846:
case 2111:
case 3823:
case 435:
case 238:
case 2702:
case 4061:
case 2920:
case 900:
case 3336:
case 382:
case 3201:
case 2935:
case 1429:
case 369:
case 152:
case 79:
case 1674:
case 21:
case 3731:
case 1262:
case 3727:
case 2779:
case 664:
case 2484:
case 1151:
case 3398:
case 2521:
case 3948:
case 3981:
case 403:
case 2868:
case 3215:
case 3867:
case 58:
case 1838:
case 2947:
case 1348:
case 2149:
case 524:
case 3538:
case 4033:
case 1401:
case 3551:
case 3603:
case 2060:
case 1851:
case 1677:
case 909:
case 2792:
case 204:
case 1700:
case 360:
case 3291:
case 1922:
case 3616:
case 1019:
case 2493:
case 1030:
case 2882:
case 515:
case 2805:
case 2310:
case 2849:
case 1632:
case 1806:
case 2757:
case 51:
case 3969:
case 867:
case 2339:
case 1138:
case 3430:
case 351:
case 538:
case 1369:
case 2168:
case 3425:
case 1288:
case 3513:
case 4018:
case 1971:
case 2662:
case 3758:
case 3663:
case 3089:
case 992:
case 1686:
case 2685:
case 3640:
case 2512:
case 2996:
case 4091:
case 2725:
case 3395:
case 1726:
case 805:
case 1760:
case 1743:
case 1144:
case 1092:
case 1820:
case 80:
case 3218:
case 379:
case 3883:
case 1774:
case 3107:
case 2980:
case 388:
case 3793:
case 546:
case 1489:
case 1309:
case 3042:
case 1835:
case 591:
case 764:
case 1844:
case 1334:
case 1953:
case 3061:
case 482:
case 3353:
case 1079:
case 1135:
case 4029:
case 2427:
case 3894:
case 476:
case 357:
case 752:
case 3311:
case 3479:
case 1594:
case 2808:
case 1911:
case 3428:
case 1120:
case 1285:
case 1461:
case 1166:
case 643:
case 1085:
case 2086:
case 1600:
case 3716:
case 303:
case 2214:
case 3402:
case 1982:
case 2822:
case 695:
case 4001:
case 291:
case 69:
case 2569:
case 3658:
case 687:
case 1147:
case 1905:
case 3454:
case 1732:
case 2657:
case 1228:
case 2913:
case 143:
case 2017:
case 2122:
case 3787:
case 3972:
case 451:
case 2628:
case 1504:
case 1372:
case 3897:
case 3627:
case 833:
case 1597:
case 2679:
case 2788:
case 2581:
case 2548:
case 3921:
case 3110:
case 2171:
case 1418:
case 825:
case 1552:
case 1759:
case 1614:
case 617:
case 3852:
case 658:
case 3289:
case 1321:
case 3547:
case 3368:
case 1553:
case 2950:
case 129:
case 1601:
case 432:
case 3195:
case 763:
case 1087:
case 385:
case 1994:
case 792:
case 2091:
case 15:
case 1373:
case 324:
case 212:
case 2684:
case 4000:
case 3243:
case 3811:
case 2123:
case 3260:
case 2441:
case 3226:
case 2488:
case 1109:
case 1511:
case 3394:
case 2724:
case 609:
case 3973:
case 1595:
case 1733:
case 2596:
case 315:
case 3077:
case 1134:
case 952:
case 3625:
case 2912:
case 1284:
case 847:
case 3153:
case 1255:
case 3754:
case 2740:
case 3785:
case 2763:
case 1335:
case 964:
case 3509:
case 3966:
case 620:
case 2580:
case 340:
case 3111:
case 2823:
case 338:
case 1845:
case 2693:
case 1809:
case 31:
case 198:
case 551:
case 3935:
case 1320:
case 269:
case 1366:
case 3403:
case 2365:
case 883:
case 3572:
case 1904:
case 491:
case 2001:
case 1872:
case 834:
case 911:
case 3728:
case 1761:
case 673:
case 2687:
case 3304:
case 1837:
case 2215:
case 3352:
case 3868:
case 1821:
case 2981:
case 731:
case 3521:
case 1203:
case 512:
case 3947:
case 3105:
case 1952:
case 3277:
case 2867:
case 828:
case 1474:
case 2322:
case 3792:
case 2603:
case 1899:
case 1629:
case 1172:
case 3882:
case 1615:
case 2616:
case 3493:
case 304:
case 1678:
case 576:
case 1582:
case 260:
case 1287:
case 65:
case 1549:
case 1505:
case 3757:
case 3805:
case 3310:
case 3849:
case 2371:
case 1093:
case 4017:
case 3074:
case 2513:
case 109:
case 1137:
case 1426:
case 1121:
case 1812:
case 917:
case 3512:
case 3654:
case 2089:
case 3000:
case 497:
case 3685:
case 2640:
case 1224:
case 1633:
case 729:
case 1150:
case 3458:
case 3725:
case 1396:
case 2395:
case 1565:
case 2107:
case 3980:
case 2909:
case 2520:
case 2492:
case 3865:
case 75:
case 192:
case 3836:
case 1380:
case 485:
case 773:
case 3550:
case 1414:
case 4032:
case 2676:
case 3290:
case 3364:
case 1112:
case 606:
case 1031:
case 2934:
case 2353:
case 3808:
case 3370:
case 2479:
case 2311:
case 218:
case 1508:
case 3431:
case 2233:
case 995:
case 2894:
case 2183:
case 3165:
case 1263:
case 2428:
case 802:
case 3014:
case 1756:
case 23:
case 2755:
case 822:
case 2382:
case 2197:
case 203:
case 2999:
case 2716:
case 3951:
case 1715:
case 943:
case 270:
case 566:
case 1778:
case 1063:
case 1351:
case 3822:
case 1490:
case 1522:
case 3569:
case 2658:
case 3762:
case 391:
case 1231:
case 588:
case 1869:
case 3913:
case 1642:
case 3871:
case 2305:
case 2810:
case 131:
case 1181:
case 3628:
case 3898:
case 2804:
case 2787:
case 2242:
case 3679:
case 896:
case 1076:
case 3788:
case 2075:
case 3741:
case 2018:
case 841:
case 535:
case 2897:
case 2631:
case 2110:
case 1848:
case 3171:
case 3476:
case 1881:
case 523:
case 3367:
case 2921:
case 53:
case 4043:
case 1024:
case 4060:
case 2139:
case 449:
case 692:
case 1791:
case 1169:
case 2368:
case 3200:
case 2289:
case 404:
case 3593:
case 325:
case 1482:
case 1302:
case 2645:
case 3680:
case 1893:
case 178:
case 3005:
case 1623:
case 2156:
case 3874:
case 3253:
case 359:
case 3499:
case 3720:
case 1783:
case 3766:
case 1526:
case 610:
case 2940:
case 2963:
case 1560:
case 3211:
case 1099:
case 2270:
case 154:
case 901:
case 716:
case 2519:
case 2712:
case 333:
case 241:
case 1354:
case 2530:
case 64:
case 2101:
case 384:
case 1405:
case 1449:
case 1021:
case 3773:
case 965:
case 3584:
case 1037:
case 1855:
case 3174:
case 2856:
case 1884:
case 1707:
case 4022:
case 1193:
case 3295:
case 2067:
case 3472:
case 772:
case 3318:
case 2438:
case 1664:
case 786:
case 1209:
case 2246:
case 3437:
case 2634:
case 1468:
case 2750:
case 680:
case 1975:
case 2317:
case 1739:
case 1532:
case 619:
case 1357:
case 1009:
case 3606:
case 2023:
case 3957:
case 1272:
case 2496:
case 2769:
case 3877:
case 2267:
case 3503:
case 1989:
case 1577:
case 2829:
case 541:
case 3095:
case 350:
case 3268:
case 180:
case 1221:
case 2300:
case 3389:
case 1816:
case 1752:
case 2891:
case 678:
case 30:
case 3747:
case 1667:
case 662:
case 2178:
case 1116:
case 1797:
case 2541:
case 3928:
case 2588:
case 3053:
case 4036:
case 3205:
case 1328:
case 2129:
case 2927:
case 522:
case 2931:
case 1034:
case 866:
case 1081:
case 2984:
case 3524:
case 2955:
case 1824:
case 42:
case 778:
case 3356:
case 1607:
case 228:
case 754:
case 2447:
case 3817:
case 1901:
case 3265:
case 2283:
case 3301:
case 2097:
case 860:
case 793:
case 3576:
case 414:
case 2374:
case 1590:
case 2993:
case 994:
case 172:
case 508:
case 2039:
case 299:
case 3635:
case 719:
case 1746:
case 2010:
case 3071:
case 4068:
case 1586:
case 283:
case 3563:
case 3925:
case 2554:
case 1863:
case 2118:
case 1471:
case 1319:
case 1176:
case 3022:
case 3117:
case 356:
case 2360:
case 3796:
case 1325:
case 2648:
case 3008:
case 672:
case 1767:
case 3222:
case 2142:
case 4095:
case 3738:
case 450:
case 1514:
case 869:
case 668:
case 3814:
case 882:
case 9:
case 2359:
case 3647:
case 3271:
case 2861:
case 2473:
case 2210:
case 876:
case 1050:
case 780:
case 2239:
case 2528:
case 3941:
case 247:
case 1388:
case 3531:
case 2987:
case 1408:
case 1269:
case 1341:
case 1697:
case 1831:
case 3114:
case 4053:
case 2669:
case 3412:
case 3036:
case 1639:
case 930:
case 3298:
case 3962:
case 371:
case 2332:
case 2903:
case 1500:
case 2435:
case 1012:
case 616:
case 2252:
case 40:
case 710:
case 2916:
case 290:
case 2466:
case 1248:
case 3329:
case 2799:
case 954:
case 77:
case 4004:
case 1006:
case 2680:
case 3645:
case 3609:
case 2049:
case 2005:
case 2735:
case 225:
case 428:
case 1736:
case 2766:
case 3390:
case 413:
case 1013:
case 2499:
case 561:
case 2253:
case 3156:
case 3264:
case 2843:
case 1695:
case 3270:
case 136:
case 1825:
case 550:
case 989:
case 2333:
case 2954:
case 1340:
case 1819:
case 1363:
case 3386:
case 3530:
case 284:
case 3712:
case 233:
case 2082:
case 16:
case 434:
case 3856:
case 2584:
case 2068:
case 1556:
case 483:
case 50:
case 3067:
case 739:
case 277:
case 1653:
case 727:
case 3438:
case 1376:
case 3801:
case 2375:
case 2744:
case 4010:
case 3750:
case 753:
case 919:
case 3634:
case 3223:
case 2143:
case 4039:
case 3246:
case 2437:
case 66:
case 261:
case 1771:
case 1605:
case 3958:
case 2832:
case 1080:
case 980:
case 2342:
case 3562:
case 3191:
case 3769:
case 3496:
case 707:
case 2957:
case 447:
case 3699:
case 1096:
case 2095:
case 142:
case 1900:
case 1238:
case 1529:
case 52:
case 3267:
case 3300:
case 1188:
case 1446:
case 2389:
case 2445:
case 3480:
case 665:
case 1423:
case 2268:
case 2516:
case 250:
case 1682:
case 3314:
case 2859:
case 832:
case 1668:
case 910:
case 1251:
case 3070:
case 2053:
case 4083:
case 3541:
case 3064:
case 636:
case 3115:
case 1213:
case 748:
case 2177:
case 408:
case 205:
case 2979:
case 514:
case 2205:
case 1798:
case 3927:
case 2361:
case 1102:
case 1608:
case 2524:
case 267:
case 1711:
case 3984:
case 2356:
case 701:
case 1404:
case 1384:
case 441:
case 916:
case 2190:
case 2673:
case 3133:
case 648:
case 3004:
case 2644:
case 3447:
case 2236:
case 1235:
case 3650:
case 1452:
case 3734:
case 1575:
case 2576:
case 1518:
case 3097:
case 3875:
case 2481:
case 1185:
case 2186:
case 2666:
case 2620:
case 139:
case 571:
case 3993:
case 986:
case 3010:
case 1974:
case 1393:
case 2071:
case 3502:
case 3745:
case 3709:
case 1244:
case 399:
case 1636:
case 1802:
case 2635:
case 334:
case 3175:
case 1410:
case 1885:
case 3118:
case 765:
case 3612:
case 1439:
case 3207:
case 968:
case 1926:
case 1960:
case 6:
case 3585:
case 2208:
case 194:
case 3833:
case 2738:
case 3094:
case 838:
case 2222:
case 1157:
case 3648:
case 3007:
case 3359:
case 2647:
case 3444:
case 1768:
case 1561:
case 1044:
case 1192:
case 4023:
case 1407:
case 653:
case 4046:
case 815:
case 3473:
case 1:
case 627:
case 3579:
case 742:
case 2527:
case 694:
case 347:
case 3987:
case 2558:
case 2065:
case 4064:
case 2713:
case 1020:
case 2114:
case 1671:
case 1542:
case 2706:
case 3204:
case 3557:
case 1035:
case 1977:
case 1179:
case 1316:
case 3252:
case 2800:
case 2315:
case 1247:
case 721:
case 1782:
case 1128:
case 2329:
case 3799:
case 3420:
case 1483:
case 1303:
case 390:
case 3072:
case 2501:
case 2130:
case 114:
case 521:
case 1744:
case 3918:
case 265:
case 3975:
case 468:
case 1421:
case 3245:
case 3209:
case 661:
case 3707:
case 26:
case 1584:
case 3037:
case 1555:
case 1068:
case 1773:
case 922:
case 3794:
case 177:
case 2296:
case 2708:
case 3670:
case 843:
case 3193:
case 1843:
case 2695:
case 1696:
case 1826:
case 2825:
case 1985:
case 3560:
case 1333:
case 4081:
case 2051:
case 3385:
case 2340:
case 3405:
case 2363:
case 3449:
case 542:
case 184:
case 605:
case 2830:
case 1082:
case 3234:
case 3623:
case 60:
case 1005:
case 3482:
case 3302:
case 1593:
case 125:
case 2736:
case 3574:
case 1499:
case 3184:
case 1874:
case 3155:
case 2331:
case 3116:
case 310:
case 3411:
case 3887:
case 1177:
case 105:
case 684:
case 1979:
case 1587:
case 62:
case 633:
case 3103:
case 221:
case 1361:
case 345:
case 2162:
case 4012:
case 625:
case 2668:
case 3559:
case 1434:
case 3752:
case 3299:
case 659:
case 2914:
case 1132:
case 2096:
case 2900:
case 1503:
case 3989:
case 2238:
case 2722:
case 1877:
case 614:
case 2446:
case 2188:
case 1445:
case 2423:
case 3221:
case 380:
case 2141:
case 2515:
case 1516:
case 2578:
case 3710:
case 2771:
case 3357:
case 2649:
case 4050:
case 1606:
case 2080:
case 3739:
case 3942:
case 501:
case 3495:
case 3272:
case 1957:
case 3863:
case 2273:
case 3471:
case 3319:
case 3840:
case 1925:
case 3586:
case 3325:
case 1208:
case 1930:
case 227:
case 2533:
case 548:
case 1469:
case 294:
case 156:
case 1022:
case 714:
case 1666:
case 372:
case 3422:
case 3590:
case 3723:
case 2974:
case 983:
case 368:
case 3746:
case 1780:
case 3124:
case 2802:
case 2636:
case 811:
case 275:
case 316:
case 733:
case 72:
case 3517:
case 489:
case 3764:
case 2518:
case 462:
case 2154:
case 3876:
case 2220:
case 3824:
case 2497:
case 493:
case 3694:
case 3956:
case 167:
case 2711:
case 3048:
case 759:
case 3212:
case 671:
case 2355:
case 3607:
case 2404:
case 3498:
case 454:
case 725:
case 2179:
case 445:
case 2316:
case 705:
case 1800:
case 1315:
case 908:
case 2247:
case 3131:
case 2782:
case 1329:
case 2128:
case 3281:
case 2892:
case 3978:
case 1751:
case 1558:
case 1065:
case 2020:
case 990:
case 1713:
case 3362:
case 70:
case 539:
case 2857:
case 1298:
case 44:
case 2749:
case 2035:
case 1412:
case 3639:
case 2561:
case 2044:
case 3604:
case 1941:
case 2407:
case 2828:
case 2:
case 750:
case 575:
case 0:
case 3697:
case 3831:
case 2879:
case 656:
case 3388:
case 1531:
case 3767:
case 3991:
case 1222:
case 207:
case 1008:
case 1450:
case 1647:
case 480:
case 852:
case 2073:
case 2768:
case 3376:
case 3917:
case 3119:
case 1438:
case 977:
case 439:
case 3467:
case 54:
case 3653:
case 2072:
case 3280:
case 1246:
case 510:
case 1634:
case 2468:
case 1976:
case 806:
case 1750:
case 2918:
case 2021:
case 1924:
case 1856:
case 2707:
case 2193:
case 3611:
case 1067:
case 602:
case 545:
case 2794:
case 3038:
case 831:
case 914:
case 3051:
case 2543:
case 3986:
case 2560:
case 1270:
case 2099:
case 3830:
case 196:
case 254:
case 141:
case 2933:
case 2354:
case 3819:
case 925:
case 3340:
case 1406:
case 2405:
case 47:
case 2449:
case 3736:
case 984:
case 2482:
case 1645:
case 1609:
case 475:
case 278:
case 301:
case 1264:
case 2184:
case 1451:
case 262:
case 289:
case 3765:
case 210:
case 3213:
case 863:
case 2797:
case 1064:
case 3331:
case 1588:
case 1129:
case 3798:
case 641:
case 2704:
case 2887:
case 3668:
case 2752:
case 1891:
case 905:
case 708:
case 1314:
case 892:
case 3914:
case 3251:
case 2453:
case 3464:
case 747:
case 3722:
case 2392:
case 3529:
case 1267:
case 622:
case 3900:
case 2989:
case 407:
case 2187:
case 554:
case 2577:
case 2803:
case 1699:
case 3096:
case 342:
case 4073:
case 961:
case 3578:
case 3682:
case 2221:
case 3141:
case 1300:
case 3446:
case 3188:
case 2739:
case 2532:
case 826:
case 1046:
case 3605:
case 1958:
case 2045:
case 589:
case 562:
case 950:
case 1023:
case 3771:
case 4044:
case 2272:
case 3862:
case 2495:
case 1562:
case 578:
case 1191:
case 1769:
case 2942:
case 2586:
case 3960:
case 183:
case 3943:
case 3439:
case 2330:
case 1554:
case 1207:
case 353:
case 3885:
case 2840:
case 46:
case 134:
case 3854:
case 1360:
case 1343:
case 2325:
case 4038:
case 327:
case 1326:
case 2422:
case 820:
case 2590:
case 339:
case 956:
case 272:
case 3665:
case 2069:
case 1039:
case 199:
case 3636:
case 2250:
case 2124:
case 1502:
case 2746:
case 1745:
case 1709:
case 1010:
case 3974:
case 128:
case 2517:
case 216:
case 375:
case 741:
case 4006:
case 1004:
case 401:
case 3185:
case 2140:
case 2163:
case 3154:
case 2876:
case 1283:
case 3266:
case 4013:
case 1984:
case 2048:
case 436:
case 3102:
case 2694:
case 2824:
case 3497:
case 1052:
case 809:
case 3404:
case 608:
case 3384:
case 37:
case 2212:
case 3355:
case 2131:
case 971:
case 1903:
case 2500:
case 628:
case 2929:
case 2127:
case 3247:
case 2012:
case 3316:
case 1889:
case 348:
case 1916:
case 3892:
case 855:
case 613:
case 2281:
case 1592:
case 3128:
case 1420:
case 1799:
case 1297:
case 2362:
case 2858:
case 3932:
case 3020:
case 1669:
case 1083:
case 1842:
case 837:
case 1204:
case 3542:
case 108:
case 3749:
case 1332:
case 3:
case 3698:
case 3407:
case 3387:
case 1239:
case 3561:
case 3044:
case 1528:
case 634:
case 516:
case 147:
case 2388:
case 2408:
case 1987:
case 1579:
case 2827:
case 3494:
case 3157:
case 307:
case 3959:
case 2991:
case 702:
case 2652:
case 1721:
case 2514:
case 3073:
case 1444:
case 1007:
case 4028:
case 3523:
case 1336:
case 1580:
case 3546:
case 1170:
case 3478:
case 2845:
case 1846:
case 2477:
case 4079:
case 3062:
case 298:
case 718:
case 3790:
case 169:
case 2320:
case 3936:
case 544:
case 1201:
case 182:
case 2366:
case 487:
case 1596:
case 1462:
case 176:
case 3896:
case 2003:
case 1164:
case 2255:
case 1256:
case 2016:
case 1015:
case 1763:
case 364:
case 3219:
case 2994:
case 2373:
case 1091:
case 112:
case 3230:
case 788:
case 1655:
case 2656:
case 474:
case 3908:
case 520:
case 1870:
case 2907:
case 1488:
case 3225:
case 2109:
case 779:
case 1776:
case 229:
case 3041:
case 3564:
case 766:
case 997:
case 2293:
case 924:
case 3350:
case 2459:
case 417:
case 4057:
case 660:
case 2287:
case 904:
case 2549:
case 612:
case 2505:
case 598:
case 1969:
case 381:
case 2093:
case 1371:
case 1419:
case 3632:
case 1758:
case 2939:
case 3288:
case 2137:
case 2426:
case 2460:
case 2121:
case 2474:
case 1603:
case 500:
case 1551:
case 2629:
case 2172:
case 3030:
case 1616:
case 3700:
case 2789:
case 160:
case 537:
case 220:
case 2821:
case 872:
case 2084:
case 2568:
case 1056:
case 4085:
case 3106:
case 3567:
case 1229:
case 868:
case 2952:
case 1867:
case 1001:
case 2872:
case 676:
case 1727:
case 1398:
case 529:
case 1687:
case 886:
case 387:
case 1624:
case 1233:
case 769:
case 782:
case 1183:
case 3254:
case 3873:
case 1428:
case 3285:
case 2240:
case 3120:
case 3461:
case 1784:
case 1807:
case 2970:
case 3911:
case 2964:
case 1061:
case 1544:
case 135:
case 2414:
case 3844:
case 3202:
case 3617:
case 4062:
case 1676:
case 2618:
case 2701:
case 776:
case 2112:
case 2031:
case 1353:
case 1909:
case 2923:
case 4041:
case 3774:
case 1520:
case 531:
case 2276:
case 3866:
case 845:
case 358:
case 712:
case 317:
case 3489:
case 3345:
case 2812:
case 3442:
case 3995:
case 1663:
case 506:
case 3144:
case 2224:
case 2633:
case 3092:
case 3760:
case 3743:
case 166:
case 2396:
case 3726:
case 2848:
case 1110:
case 2881:
case 3292:
case 878:
case 2024:
case 1139:
case 1937:
case 2967:
case 1852:
case 526:
case 2417:
case 4019:
case 3847:
case 3759:
case 688:
case 2661:
case 3257:
case 1804:
case 2598:
case 893:
case 854:
case 3597:
case 1018:
case 2258:
case 1627:
case 666:
case 1631:
case 1658:
case 2227:
case 3905:
case 618:
case 2231:
case 2313:
case 343:
case 1839:
case 2306:
case 1261:
case 1349:
case 3228:
case 2486:
case 2148:
case 3732:
case 3539:
case 1402:
case 1999:
case 1716:
case 635:
case 2715:
case 3085:
case 2063:
case 1104:
case 563:
case 1033:
case 2351:
case 411:
case 946:
case 3777:
case 3982:
case 991:
case 1703:
case 2490:
case 1032:
case 3845:
case 140:
case 2478:
case 1509:
case 1966:
case 2546:
case 2523:
case 3366:
case 4031:
case 2790:
case 2674:
case 11:
case 3477:
case 398:
case 2626:
case 1625:
case 2643:
case 1895:
case 3134:
case 3003:
case 969:
case 115:
case 3595:
case 8:
case 982:
case 2786:
case 1754:
case 3432:
case 1630:
case 2230:
case 1059:
case 1487:
case 2908:
case 463:
case 2219:
case 3994:
case 35:
case 3373:
case 3511:
case 732:
case 3907:
case 2180:
case 3145:
case 3109:
case 1243:
case 1811:
case 1260:
case 848:
case 649:
case 1853:
case 3601:
case 3718:
case 2564:
case 604:
case 912:
case 2196:
case 492:
case 1805:
case 1310:
case 697:
case 3093:
case 2632:
case 68:
case 344:
case 3549:
case 3505:
case 3742:
case 2138:
case 552:
case 3287:
case 960:
case 2241:
case 1168:
case 2369:
case 309:
case 3426:
case 1074:
case 2971:
case 1662:
case 4076:
case 149:
case 1026:
case 3629:
case 4024:
case 2677:
case 1599:
case 3474:
case 1792:
case 2700:
case 951:
case 3582:
case 2019:
case 1493:
case 1259:
case 3568:
case 2714:
case 3055:
case 1521:
case 1537:
case 638:
case 640:
case 320:
case 3216:
case 1352:
case 746:
case 1277:
case 3952:
case 2838:
case 2567:
case 1149:
case 2348:
case 211:
case 2381:
case 2401:
case 3872:
case 615:
case 1779:
case 1304:
case 2151:
case 431:
case 2456:
case 1455:
case 1728:
case 3199:
case 646:
case 1431:
case 691:
case 71:
case 326:
case 1014:
case 3970:
case 740:
case 1286:
case 2285:
case 3240:
case 935:
case 2120:
case 2507:
case 1165:
case 2254:
case 3414:
case 2844:
case 1550:
case 2028:
case 93:
case 923:
case 918:
case 3112:
case 3027:
case 3618:
case 957:
case 3701:
case 3675:
case 1865:
case 3276:
case 2690:
case 2866:
case 966:
case 2774:
case 3536:
case 797:
case 3400:
case 4087:
case 1346:
case 2345:
case 2309:
case 78:
case 1108:
case 258:
case 1602:
case 455:
case 1836:
case 2835:
case 1217:
case 1000:
case 1685:
case 1996:
case 363:
case 2995:
case 45:
case 988:
case 1725:
case 2760:
case 3150:
case 979:
case 1458:
case 2144:
case 3224:
case 2092:
case 1581:
case 2292:
case 1548:
case 1367:
case 2968:
case 1476:
case 2475:
case 3881:
case 2418:
case 3417:
case 1938:
case 59:
case 3967:
case 3791:
case 3169:
case 4093:
case 1017:
case 1898:
case 595:
case 3661:
case 2257:
case 2504:
case 1628:
case 1424:
case 3258:
case 409:
case 2597:
case 1679:
case 86:
case 2279:
case 3869:
case 3231:
case 558:
case 3227:
case 1762:
case 2949:
case 331:
case 2732:
case 3181:
case 903:
case 3306:
case 1463:
case 2228:
case 3642:
case 3571:
case 1913:
case 970:
case 243:
case 4055:
case 2085:
case 3778:
case 2600:
case 3063:
case 2054:
case 2399:
case 1198:
case 306:
case 574:
case 2777:
case 1822:
case 3351:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1763272803/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,];
var gg_b = "1763272803/";

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
