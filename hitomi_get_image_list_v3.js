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
case 2458:
case 342:
case 849:
case 2241:
case 934:
case 2468:
case 3196:
case 291:
case 2835:
case 3367:
case 929:
case 282:
case 570:
case 2879:
case 159:
case 802:
case 3868:
case 3357:
case 3282:
case 354:
case 540:
case 2991:
case 3967:
case 1574:
case 3957:
case 1511:
case 1412:
case 3615:
case 231:
case 372:
case 1146:
case 1382:
case 2811:
case 2186:
case 4065:
case 379:
case 3474:
case 1012:
case 3512:
case 3411:
case 1233:
case 3756:
case 562:
case 4090:
case 2874:
case 3381:
case 3766:
case 2921:
case 888:
case 1535:
case 3079:
case 302:
case 3631:
case 152:
case 3466:
case 3981:
case 2198:
case 3711:
case 2003:
case 815:
case 360:
case 3774:
case 2866:
case 2623:
case 2942:
case 3126:
case 3333:
case 1765:
case 2029:
case 459:
case 207:
case 2206:
case 3371:
case 887:
case 3440:
case 3673:
case 746:
case 2609:
case 1790:
case 113:
case 2799:
case 3784:
case 1490:
case 12:
case 2424:
case 622:
case 776:
case 3740:
case 1838:
case 775:
case 2094:
case 1101:
case 1589:
case 3520:
case 3824:
case 2154:
case 39:
case 3536:
case 404:
case 3652:
case 1036:
case 1455:
case 1353:
case 2889:
case 1363:
case 2549:
case 4012:
case 1807:
case 2494:
case 629:
case 277:
case 444:
case 3319:
case 1651:
case 2538:
case 3919:
case 3253:
case 1736:
case 2429:
case 247:
case 3789:
case 2794:
case 1372:
case 1616:
case 2169:
case 3040:
case 1908:
case 706:
case 1844:
case 83:
case 3178:
case 1953:
case 1219:
case 387:
case 694:
case 1880:
case 3829:
case 1584:
case 719:
case 452:
case 2099:
case 3084:
case 3287:
case 2834:
case 1273:
case 2530:
case 1637:
case 3973:
case 4069:
case 1987:
case 1098:
case 1717:
case 3434:
case 2909:
case 1158:
case 1252:
case 2309:
case 3048:
case 3170:
case 650:
case 3846:
case 3075:
case 3671:
case 3586:
case 36:
case 3952:
case 3200:
case 1017:
case 3448:
case 2046:
case 3251:
case 2875:
case 2297:
case 86:
case 1672:
case 3439:
case 3475:
case 2347:
case 1961:
case 2588:
case 57:
case 214:
case 54:
case 3528:
case 255:
case 3619:
case 256:
case 3775:
case 1916:
case 3739:
case 1498:
case 1653:
case 1534:
case 664:
case 3034:
case 1663:
case 1830:
case 3485:
case 3315:
case 1059:
case 1476:
case 3569:
case 261:
case 2993:
case 485:
case 2885:
case 3013:
case 539:
case 1764:
case 2155:
case 1454:
case 4086:
case 2095:
case 3667:
case 2401:
case 2502:
case 3657:
case 1215:
case 1776:
case 2050:
case 2060:
case 418:
case 1332:
case 830:
case 2425:
case 3801:
case 3107:
case 2136:
case 3850:
case 3564:
case 3554:
case 2605:
case 1194:
case 3713:
case 2450:
case 1759:
case 1769:
case 3331:
case 3895:
case 4017:
case 2621:
case 532:
case 3931:
case 2813:
case 3681:
case 1459:
case 2750:
case 1845:
case 117:
case 3180:
case 1129:
case 3144:
case 2923:
case 2642:
case 1231:
case 191:
case 1403:
case 3322:
case 3134:
case 178:
case 3770:
case 1241:
case 1458:
case 2556:
case 3941:
case 901:
case 407:
case 259:
case 1879:
case 182:
case 2870:
case 1991:
case 884:
case 3341:
case 3812:
case 204:
case 2146:
case 148:
case 3470:
case 131:
case 3291:
case 2257:
case 2511:
case 1905:
case 3139:
case 3992:
case 3175:
case 1342:
case 1186:
case 2677:
case 3221:
case 998:
case 1921:
case 730:
case 1874:
case 4024:
case 358:
case 2233:
case 1292:
case 697:
case 3503:
case 637:
case 1068:
case 3568:
case 1321:
case 821:
case 2579:
case 3242:
case 2535:
case 938:
case 523:
case 1623:
case 447:
case 941:
case 1856:
case 1884:
case 357:
case 107:
case 1029:
case 3044:
case 1544:
case 1840:
case 1499:
case 1724:
case 2687:
case 491:
case 2937:
case 76:
case 431:
case 3306:
case 3865:
case 2271:
case 3449:
case 2490:
case 1799:
case 2600:
case 213:
case 2125:
case 2036:
case 3007:
case 1164:
case 3438:
case 2214:
case 2589:
case 2101:
case 2150:
case 3836:
case 2807:
case 2160:
case 2308:
case 2353:
case 2436:
case 1538:
case 2651:
case 3744:
case 596:
case 3910:
case 2065:
case 601:
case 2972:
case 177:
case 3780:
case 98:
case 2420:
case 3480:
case 536:
case 3444:
case 2736:
case 3707:
case 857:
case 1099:
case 4058:
case 2880:
case 4068:
case 2953:
case 1159:
case 4003:
case 2844:
case 1169:
case 2273:
case 693:
case 346:
case 3209:
case 3788:
case 668:
case 3026:
case 1526:
case 345:
case 2158:
case 3179:
case 3135:
case 1909:
case 473:
case 2300:
case 1746:
case 2098:
case 2103:
case 2987:
case 3496:
case 3828:
case 3606:
case 1218:
case 527:
case 1112:
case 2387:
case 79:
case 3796:
case 4050:
case 3927:
case 2888:
case 218:
case 1309:
case 2417:
case 2252:
case 443:
case 2728:
case 2086:
case 510:
case 2539:
case 4095:
case 1227:
case 875:
case 3111:
case 3204:
case 1875:
case 4025:
case 3546:
case 114:
case 566:
case 3997:
case 2486:
case 1347:
case 2316:
case 1904:
case 1848:
case 3174:
case 4001:
case 787:
case 1304:
case 3430:
case 319:
case 156:
case 3898:
case 2351:
case 155:
case 3426:
case 2028:
case 3397:
case 2830:
case 3156:
case 2653:
case 1596:
case 3096:
case 846:
case 2826:
case 1993:
case 3140:
case 161:
case 716:
case 2476:
case 3078:
case 2059:
case 2932:
case 2199:
case 3641:
case 980:
case 2513:
case 3293:
case 2215:
case 772:
case 1401:
case 1095:
case 2454:
case 1165:
case 1243:
case 626:
case 2464:
case 1425:
case 143:
case 2332:
case 1190:
case 2124:
case 1060:
case 754:
case 1393:
case 3854:
case 3550:
case 2776:
case 3501:
case 1120:
case 3402:
case 3189:
case 1001:
case 3692:
case 1495:
case 2977:
case 3745:
case 414:
case 1136:
case 4046:
case 3525:
case 103:
case 2283:
case 1460:
case 667:
case 1450:
case 1750:
case 1813:
case 3223:
case 749:
case 528:
case 2231:
case 455:
case 2377:
case 933:
case 3869:
case 2878:
case 3859:
case 1923:
case 456:
case 217:
case 3702:
case 702:
case 1795:
case 1073:
case 1587:
case 3998:
case 1348:
case 513:
case 2509:
case 2181:
case 1847:
case 2816:
case 2797:
case 811:
case 3751:
case 1375:
case 2018:
case 3105:
case 3620:
case 2330:
case 470:
case 3716:
case 1192:
case 3986:
case 3562:
case 2326:
case 3461:
case 3451:
case 3636:
case 2607:
case 96:
case 3000:
case 1500:
case 1286:
case 2861:
case 4015:
case 2851:
case 2800:
case 2167:
case 235:
case 2097:
case 3328:
case 3061:
case 2246:
case 3827:
case 3655:
case 236:
case 1551:
case 3400:
case 3917:
case 3690:
case 1773:
case 2649:
case 3787:
case 2396:
case 1473:
case 3487:
case 683:
case 2996:
case 3317:
case 4031:
case 1684:
case 462:
case 1141:
case 1762:
case 296:
case 1752:
case 3234:
case 1809:
case 400:
case 2547:
case 169:
case 504:
case 2119:
case 3777:
case 1532:
case 1666:
case 2978:
case 3969:
case 1015:
case 3359:
case 983:
case 2295:
case 1731:
case 2043:
case 1110:
case 1483:
case 4052:
case 2260:
case 1674:
case 2250:
case 930:
case 2201:
case 1254:
case 2443:
case 1385:
case 771:
case 574:
case 3954:
case 3077:
case 798:
case 350:
case 1276:
case 3285:
case 741:
case 1031:
case 2743:
case 66:
case 1715:
case 1106:
case 3147:
case 2792:
case 780:
case 3256:
case 1956:
case 916:
case 1582:
case 251:
case 909:
case 4014:
case 1356:
case 972:
case 687:
case 40:
case 1433:
case 3104:
case 1067:
case 3567:
case 3211:
case 2602:
case 1821:
case 520:
case 1891:
case 2521:
case 3654:
case 44:
case 1033:
case 2162:
case 228:
case 2741:
case 1467:
case 793:
case 768:
case 1118:
case 1767:
case 2882:
case 1757:
case 902:
case 3235:
case 2441:
case 829:
case 322:
case 2370:
case 1935:
case 1979:
case 192:
case 1685:
case 2722:
case 1081:
case 3109:
case 3312:
case 679:
case 2229:
case 767:
case 1389:
case 2853:
case 3772:
case 2863:
case 1989:
case 3920:
case 439:
case 4057:
case 4067:
case 10:
case 35:
case 1236:
case 3753:
case 424:
case 3763:
case 3514:
case 660:
case 649:
case 1220:
case 3289:
case 1572:
case 3072:
case 2224:
case 14:
case 1290:
case 4033:
case 2688:
case 3965:
case 3955:
case 2938:
case 616:
case 1143:
case 3990:
case 432:
case 1265:
case 3737:
case 2706:
case 2949:
case 85:
case 2349:
case 1940:
case 3193:
case 1508:
case 1714:
case 3437:
case 2696:
case 1634:
case 1553:
case 3053:
case 1984:
case 3390:
case 492:
case 3284:
case 481:
case 7:
case 265:
case 17:
case 2338:
case 266:
case 3355:
case 726:
case 946:
case 945:
case 3009:
case 2587:
case 2073:
case 1930:
case 1018:
case 3447:
case 2339:
case 3518:
case 367:
case 3629:
case 1680:
case 825:
case 653:
case 1644:
case 1926:
case 1326:
case 2062:
case 1497:
case 2192:
case 1330:
case 2975:
case 2689:
case 75:
case 1027:
case 1246:
case 3597:
case 41:
case 135:
case 1718:
case 1800:
case 1396:
case 3852:
case 3862:
case 1649:
case 3624:
case 2334:
case 2228:
case 867:
case 2684:
case 906:
case 3182:
case 1996:
case 2640:
case 1418:
case 3296:
case 2809:
case 2752:
case 2762:
case 195:
case 2141:
case 1388:
case 3423:
case 1302:
case 3278:
case 4018:
case 2269:
case 3108:
case 531:
case 1978:
case 2823:
case 2666:
case 380:
case 2431:
case 606:
case 605:
case 1295:
case 794:
case 3960:
case 591:
case 3950:
case 3883:
case 3202:
case 1902:
case 582:
case 893:
case 3995:
case 270:
case 1260:
case 1345:
case 3723:
case 646:
case 589:
case 3925:
case 368:
case 1443:
case 645:
case 3901:
case 1171:
case 612:
case 435:
case 436:
case 1225:
case 2893:
case 495:
case 3023:
case 496:
case 880:
case 2276:
case 1832:
case 3493:
case 3137:
case 2106:
case 2715:
case 3325:
case 333:
case 2985:
case 262:
case 2635:
case 1743:
case 508:
case 1041:
case 2374:
case 2613:
case 3705:
case 299:
case 410:
case 3116:
case 4006:
case 2842:
case 2311:
case 2966:
case 3721:
case 2481:
case 2956:
case 573:
case 3522:
case 764:
case 3660:
case 3833:
case 3405:
case 239:
case 1602:
case 3091:
case 3695:
case 1591:
case 1492:
case 2433:
case 3161:
case 1521:
case 363:
case 1422:
case 3021:
case 3857:
case 1970:
case 232:
case 657:
case 3303:
case 2127:
case 3592:
case 3491:
case 984:
case 1741:
case 1162:
case 2033:
case 4010:
case 958:
case 1152:
case 1258:
case 465:
case 1441:
case 281:
case 1268:
case 2757:
case 2118:
case 341:
case 1173:
case 503:
case 292:
case 1370:
case 3280:
case 3819:
case 3506:
case 451:
case 110:
case 397:
case 3929:
case 3394:
case 1853:
case 1710:
case 1808:
case 88:
case 1183:
case 3177:
case 20:
case 2071:
case 1380:
case 3329:
case 1872:
case 4022:
case 1010:
case 556:
case 1688:
case 428:
case 24:
case 2290:
case 1224:
case 4092:
case 1115:
case 1949:
case 38:
case 2414:
case 2340:
case 3399:
case 3924:
case 837:
case 3646:
case 2563:
case 3324:
case 897:
case 1696:
case 1406:
case 2508:
case 2714:
case 2940:
case 2771:
case 514:
case 711:
case 166:
case 1338:
case 3292:
case 1205:
case 2512:
case 3874:
case 533:
case 2381:
case 1148:
case 2766:
case 3921:
case 158:
case 3570:
case 2933:
case 3342:
case 4038:
case 3811:
case 627:
case 1175:
case 1992:
case 1139:
case 878:
case 3305:
case 1392:
case 3942:
case 3623:
case 720:
case 3321:
case 1568:
case 3068:
case 593:
case 2981:
case 1242:
case 2631:
case 568:
case 1558:
case 717:
case 3198:
case 2711:
case 3003:
case 4080:
case 209:
case 2357:
case 121:
case 2367:
case 889:
case 382:
case 2858:
case 3879:
case 3128:
case 1941:
case 4044:
case 3468:
case 1322:
case 2479:
case 3458:
case 242:
case 1770:
case 378:
case 3693:
case 2196:
case 1291:
case 331:
case 2011:
case 3768:
case 1922:
case 2735:
case 2779:
case 580:
case 3758:
case 665:
case 2188:
case 4007:
case 1812:
case 808:
case 3991:
case 288:
case 2967:
case 3604:
case 651:
case 2102:
case 3494:
case 1780:
case 3729:
case 1910:
case 2555:
case 1407:
case 1697:
case 4070:
case 1524:
case 458:
case 525:
case 3210:
case 1836:
case 5:
case 484:
case 2272:
case 3549:
case 807:
case 965:
case 2829:
case 2919:
case 2145:
case 2263:
case 2208:
case 1480:
case 3429:
case 2789:
case 3176:
case 910:
case 2440:
case 2673:
case 1749:
case 2484:
case 628:
case 1185:
case 3544:
case 785:
case 1738:
case 786:
case 23:
case 3884:
case 3206:
case 2371:
case 1080:
case 2089:
case 1594:
case 567:
case 718:
case 3507:
case 2652:
case 3154:
case 3799:
case 877:
case 1449:
case 1865:
case 2740:
case 3904:
case 2439:
case 2475:
case 1726:
case 1088:
case 1997:
case 2261:
case 3875:
case 3297:
case 2448:
case 935:
case 2251:
case 453:
case 2517:
case 1096:
case 1247:
case 58:
case 2216:
case 1156:
case 995:
case 2034:
case 2619:
case 106:
case 2775:
case 3947:
case 3304:
case 2739:
case 2598:
case 855:
case 1828:
case 1135:
case 1179:
case 3746:
case 1209:
case 2352:
case 145:
case 2362:
case 1026:
case 1788:
case 1030:
case 1918:
case 3530:
case 3834:
case 713:
case 2671:
case 1318:
case 3227:
case 1817:
case 4002:
case 2952:
case 1488:
case 2586:
case 2962:
case 2170:
case 2734:
case 2048:
case 1927:
case 1796:
case 3112:
case 814:
case 744:
case 3460:
case 3621:
case 538:
case 2277:
case 923:
case 2895:
case 2860:
case 2633:
case 2554:
case 4088:
case 3136:
case 2107:
case 2983:
case 2850:
case 2564:
case 1501:
case 1402:
case 3495:
case 843:
case 1702:
case 2180:
case 752:
case 3795:
case 290:
case 873:
case 405:
case 1869:
case 1445:
case 861:
case 2144:
case 1859:
case 406:
case 2085:
case 2931:
case 598:
case 2576:
case 3750:
case 2013:
case 4030:
case 1293:
case 445:
case 3545:
case 1641:
case 446:
case 2485:
case 636:
case 3993:
case 1140:
case 1078:
case 2559:
case 3578:
case 704:
case 501:
case 3060:
case 1864:
case 1622:
case 343:
case 696:
case 3190:
case 1943:
case 695:
case 476:
case 3155:
case 2138:
case 3401:
case 283:
case 3691:
case 258:
case 3233:
case 2148:
case 1381:
case 1512:
case 2205:
case 3012:
case 804:
case 550:
case 2992:
case 932:
case 1683:
case 992:
case 1333:
case 160:
case 2392:
case 1774:
case 1711:
case 4084:
case 3579:
case 1456:
case 2558:
case 352:
case 0:
case 2242:
case 1079:
case 60:
case 3535:
case 981:
case 487:
case 564:
case 116:
case 761:
case 852:
case 109:
case 1868:
case 3712:
case 874:
case 1435:
case 142:
case 1479:
case 3566:
case 2322:
case 1066:
case 2134:
case 3982:
case 172:
case 1779:
case 67:
case 3146:
case 1615:
case 3412:
case 3257:
case 939:
case 1967:
case 1074:
case 1957:
case 3574:
case 2812:
case 154:
case 304:
case 49:
case 1188:
case 1565:
case 2407:
case 3055:
case 3651:
case 1555:
case 479:
case 1489:
case 1102:
case 3195:
case 714:
case 1272:
case 3160:
case 3308:
case 2836:
case 3807:
case 2820:
case 94:
case 1894:
case 3353:
case 2524:
case 3880:
case 1829:
case 3219:
case 97:
case 3953:
case 1084:
case 4035:
case 402:
case 2599:
case 4079:
case 3540:
case 3908:
case 1040:
case 755:
case 1178:
case 3844:
case 3372:
case 4066:
case 2185:
case 1484:
case 442:
case 3790:
case 1314:
case 1673:
case 3937:
case 1440:
case 409:
case 2529:
case 257:
case 2080:
case 1899:
case 2618:
case 1237:
case 415:
case 3765:
case 13:
case 2738:
case 416:
case 3849:
case 692:
case 3465:
case 3036:
case 454:
case 2438:
case 1536:
case 3101:
case 3589:
case 4074:
case 1089:
case 3020:
case 488:
case 3214:
case 1824:
case 3337:
case 2865:
case 1740:
case 3271:
case 2449:
case 2855:
case 313:
case 3125:
case 472:
case 681:
case 1784:
case 3486:
case 2610:
case 818:
case 2174:
case 2730:
case 430:
case 3672:
case 640:
case 2886:
case 2204:
case 3798:
case 2111:
case 669:
case 1251:
case 2546:
case 1448:
case 1261:
case 4085:
case 1034:
case 3653:
case 3830:
case 3663:
case 2156:
case 1216:
case 2247:
case 3498:
case 219:
case 1739:
case 3361:
case 2426:
case 1528:
case 205:
case 206:
case 3351:
case 1434:
case 3168:
case 2179:
case 2828:
case 2606:
case 3103:
case 386:
case 1598:
case 2496:
case 4013:
case 2026:
case 3428:
case 245:
case 1352:
case 275:
case 2488:
case 1952:
case 276:
case 2318:
case 1075:
case 3539:
case 3888:
case 2927:
case 3548:
case 253:
case 2525:
case 3759:
case 2778:
case 3194:
case 1564:
case 1850:
case 3054:
case 1554:
case 3977:
case 1383:
case 2859:
case 1144:
case 3231:
case 2445:
case 190:
case 1180:
case 317:
case 3076:
case 3459:
case 2478:
case 3469:
case 320:
case 1681:
case 1085:
case 820:
case 594:
case 2876:
case 2641:
case 2045:
case 1232:
case 1013:
case 940:
case 3476:
case 2078:
case 1315:
case 2343:
case 3932:
case 782:
case 1485:
case 2943:
case 1785:
case 2622:
case 2864:
case 1915:
case 3776:
case 2854:
case 2595:
case 1667:
case 4075:
case 183:
case 3215:
case 1657:
case 1138:
case 731:
case 3464:
case 914:
case 468:
case 1946:
case 2787:
case 74:
case 3427:
case 1862:
case 661:
case 3718:
case 3504:
case 1004:
case 3157:
case 3246:
case 2827:
case 3638:
case 673:
case 3097:
case 2328:
case 2665:
case 1597:
case 3988:
case 396:
case 1873:
case 3388:
case 2928:
case 2016:
case 1047:
case 3418:
case 1296:
case 1:
case 77:
case 3996:
case 1699:
case 956:
case 2317:
case 1346:
case 2700:
case 3644:
case 2142:
case 2416:
case 1447:
case 3018:
case 1629:
case 2087:
case 4093:
case 1230:
case 1226:
case 480:
case 3816:
case 2000:
case 2121:
case 70:
case 1527:
case 3027:
case 2398:
case 2275:
case 2239:
case 2897:
case 836:
case 1747:
case 2716:
case 2105:
case 2620:
case 1694:
case 557:
case 2636:
case 3607:
case 2248:
case 2986:
case 3133:
case 3326:
case 903:
case 2077:
case 2583:
case 3225:
case 2964:
case 1815:
case 1901:
case 4004:
case 3114:
case 1793:
case 2376:
case 3201:
case 3670:
case 133:
case 426:
case 1325:
case 3743:
case 1658:
case 2531:
case 558:
case 1493:
case 4:
case 2976:
case 1603:
case 781:
case 584:
case 792:
case 2354:
case 2285:
case 1023:
case 4009:
case 799:
case 1245:
case 1163:
case 2032:
case 1108:
case 1350:
case 2213:
case 3978:
case 961:
case 467:
case 1831:
case 2777:
case 3945:
case 1423:
case 943:
case 1723:
case 264:
case 3250:
case 521:
case 1995:
case 1960:
case 2369:
case 1202:
case 81:
case 2515:
case 656:
case 655:
case 3043:
case 328:
case 1270:
case 3152:
case 908:
case 1005:
case 3092:
case 1491:
case 171:
case 2912:
case 1857:
case 1021:
case 3422:
case 163:
case 1100:
case 1368:
case 1968:
case 700:
case 2581:
case 3370:
case 138:
case 3173:
case 2841:
case 2312:
case 3882:
case 3203:
case 1791:
case 3441:
case 989:
case 3258:
case 851:
case 769:
case 2669:
case 677:
case 3678:
case 497:
case 991:
case 2147:
case 3792:
case 3041:
case 234:
case 1161:
case 948:
case 1151:
case 2211:
case 437:
case 931:
case 1405:
case 3492:
case 1833:
case 1660:
case 2274:
case 1421:
case 1522:
case 770:
case 2892:
case 1646:
case 4021:
case 463:
case 1238:
case 3115:
case 977:
case 3706:
case 471:
case 18:
case 3949:
case 4005:
case 3938:
case 506:
case 678:
case 3688:
case 366:
case 2519:
case 2355:
case 3837:
case 2284:
case 2365:
case 2628:
case 631:
case 2008:
case 3349:
case 2193:
case 441:
case 2063:
case 1999:
case 438:
case 1324:
case 576:
case 2336:
case 608:
case 575:
case 2772:
case 3630:
case 3863:
case 2320:
case 3980:
case 197:
case 2698:
case 3229:
case 2037:
case 401:
case 907:
case 2463:
case 3131:
case 1244:
case 2763:
case 512:
case 1207:
case 3294:
case 2289:
case 2514:
case 2571:
case 4091:
case 3380:
case 1329:
case 1994:
case 689:
case 3410:
case 546:
case 545:
case 2852:
case 2709:
case 587:
case 1917:
case 1400:
case 3122:
case 2624:
case 1665:
case 1061:
case 3551:
case 2004:
case 1191:
case 3809:
case 3516:
case 450:
case 1016:
case 3762:
case 1928:
case 2873:
case 1234:
case 3752:
case 1700:
case 2409:
case 1317:
case 3934:
case 225:
case 3473:
case 3640:
case 1487:
case 2:
case 267:
case 2629:
case 3375:
case 2518:
case 59:
case 3348:
case 3073:
case 1573:
case 3587:
case 1897:
case 1275:
case 3948:
case 3062:
case 1986:
case 53:
case 3052:
case 1248:
case 1451:
case 918:
case 3689:
case 620:
case 1716:
case 2747:
case 685:
case 1843:
case 549:
case 2901:
case 686:
case 3083:
case 2815:
case 4051:
case 1954:
case 3254:
case 1732:
case 502:
case 293:
case 3385:
case 2925:
case 1376:
case 2793:
case 3715:
case 411:
case 2137:
case 1432:
case 2658:
case 2325:
case 840:
case 1285:
case 1364:
case 618:
case 3893:
case 1354:
case 4016:
case 920:
case 3276:
case 579:
case 2301:
case 1213:
case 2350:
case 2093:
case 3431:
case 2153:
case 554:
case 751:
case 3783:
case 588:
case 2831:
case 2395:
case 3269:
case 3913:
case 3259:
case 369:
case 2995:
case 370:
case 509:
case 3313:
case 3483:
case 515:
case 3731:
case 2543:
case 542:
case 1515:
case 1359:
case 1369:
case 2960:
case 2592:
case 824:
case 4072:
case 3467:
case 3212:
case 2601:
case 1664:
case 2270:
case 298:
case 3335:
case 2867:
case 3891:
case 2358:
case 2625:
case 1782:
case 2857:
case 2303:
case 1912:
case 1676:
case 2903:
case 1312:
case 241:
case 1841:
case 4008:
case 392:
case 3979:
case 3935:
case 974:
case 4063:
case 3081:
case 613:
case 62:
case 1279:
case 122:
case 1235:
case 3767:
case 530:
case 2791:
case 3118:
case 3311:
case 4037:
case 959:
case 3842:
case 1669:
case 3966:
case 1082:
case 1266:
case 134:
case 2442:
case 2541:
case 3733:
case 2881:
case 2405:
case 1211:
case 2151:
case 2161:
case 2742:
case 904:
case 3356:
case 2421:
case 3366:
case 2522:
case 3805:
case 3911:
case 2660:
case 2833:
case 736:
case 28:
case 1737:
case 3414:
case 659:
case 80:
case 2238:
case 1617:
case 3255:
case 2399:
case 2924:
case 3143:
case 1990:
case 1965:
case 2814:
case 3290:
case 2510:
case 2249:
case 1072:
case 3471:
case 1240:
case 1628:
case 1284:
case 1053:
case 3634:
case 604:
case 1390:
case 2132:
case 3508:
case 3714:
case 1193:
case 3940:
case 796:
case 1008:
case 795:
case 56:
case 1336:
case 434:
case 1123:
case 1453:
case 4082:
case 1463:
case 1408:
case 2506:
case 2280:
case 87:
case 2819:
case 1698:
case 429:
case 1708:
case 1289:
case 84:
case 3648:
case 674:
case 1753:
case 3236:
case 494:
case 1936:
case 3719:
case 92:
case 1920:
case 1472:
case 3675:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752012001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,];
var gg_b = "1752012001/";

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
