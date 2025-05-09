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
case 3190:
case 3300:
case 1905:
case 3221:
case 4079:
case 505:
case 3872:
case 1273:
case 3399:
case 3032:
case 2105:
case 3940:
case 2395:
case 3733:
case 2334:
case 1712:
case 1013:
case 961:
case 1080:
case 3681:
case 3292:
case 2850:
case 3364:
case 2062:
case 2236:
case 1768:
case 2081:
case 28:
case 3249:
case 1147:
case 2197:
case 412:
case 179:
case 1295:
case 286:
case 2947:
case 3184:
case 2431:
case 2373:
case 3662:
case 608:
case 3857:
case 1585:
case 307:
case 3561:
case 888:
case 570:
case 410:
case 2632:
case 857:
case 3342:
case 383:
case 736:
case 653:
case 2675:
case 3721:
case 2778:
case 2452:
case 3846:
case 1773:
case 1988:
case 4044:
case 210:
case 1319:
case 2983:
case 134:
case 2614:
case 212:
case 3813:
case 1727:
case 54:
case 3048:
case 3093:
case 933:
case 16:
case 2651:
case 3792:
case 4081:
case 48:
case 55:
case 3470:
case 2263:
case 546:
case 2736:
case 2956:
case 166:
case 3701:
case 3215:
case 2693:
case 611:
case 2523:
case 224:
case 1734:
case 2219:
case 2865:
case 3274:
case 4062:
case 3917:
case 819:
case 830:
case 2111:
case 2079:
case 2577:
case 187:
case 3014:
case 2403:
case 3376:
case 2676:
case 281:
case 32:
case 1517:
case 3845:
case 209:
case 4027:
case 104:
case 1417:
case 326:
case 3668:
case 2971:
case 1372:
case 2769:
case 2257:
case 3787:
case 1279:
case 3511:
case 958:
case 4073:
case 3177:
case 987:
case 948:
case 3959:
case 875:
case 893:
case 3739:
case 1633:
case 697:
case 903:
case 2794:
case 2638:
case 223:
case 398:
case 3152:
case 3488:
case 1796:
case 800:
case 2272:
case 513:
case 745:
case 2866:
case 340:
case 350:
case 680:
case 3314:
case 682:
case 352:
case 4095:
case 1718:
case 3243:
case 3076:
case 342:
case 1674:
case 1762:
case 1063:
case 1357:
case 3836:
case 966:
case 3375:
case 1970:
case 644:
case 1906:
case 37:
case 61:
case 3099:
case 1692:
case 4012:
case 1045:
case 979:
case 2034:
case 3000:
case 1601:
case 1346:
case 2874:
case 2269:
case 2937:
case 2757:
case 115:
case 1491:
case 2126:
case 1591:
case 763:
case 2989:
case 825:
case 2161:
case 295:
case 3985:
case 2182:
case 1078:
case 3716:
case 2458:
case 2664:
case 2246:
case 2558:
case 2509:
case 2381:
case 1838:
case 1124:
case 1982:
case 1160:
case 2833:
case 2429:
case 1586:
case 3634:
case 2027:
case 2529:
case 161:
case 3743:
case 706:
case 551:
case 1649:
case 3042:
case 3930:
case 3750:
case 2904:
case 1262:
case 70:
case 170:
case 1060:
case 432:
case 2978:
case 2532:
case 663:
case 2432:
case 1973:
case 867:
case 3966:
case 1685:
case 3626:
case 2710:
case 3596:
case 3384:
case 3253:
case 1852:
case 2082:
case 3496:
case 1178:
case 1136:
case 71:
case 1667:
case 744:
case 1927:
case 3992:
case 935:
case 754:
case 1004:
case 172:
case 1225:
case 2127:
case 419:
case 430:
case 3901:
case 2756:
case 2936:
case 579:
case 3286:
case 3949:
case 874:
case 3031:
case 391:
case 3358:
case 606:
case 1995:
case 2945:
case 1145:
case 3481:
case 2134:
case 3871:
case 738:
case 2305:
case 2195:
case 3199:
case 3222:
case 1823:
case 3581:
case 951:
case 3329:
case 3544:
case 1803:
case 3202:
case 2808:
case 2325:
case 1539:
case 3682:
case 3291:
case 3120:
case 2859:
case 1487:
case 1877:
case 288:
case 247:
case 3164:
case 1711:
case 105:
case 1608:
case 503:
case 631:
case 3138:
case 168:
case 4026:
case 488:
case 447:
case 1659:
case 548:
case 1163:
case 4006:
case 1550:
case 3804:
case 2963:
case 1598:
case 3786:
case 529:
case 1968:
case 3915:
case 1383:
case 2451:
case 2747:
case 1797:
case 14:
case 56:
case 2551:
case 15:
case 3702:
case 913:
case 2514:
case 1356:
case 4082:
case 645:
case 2575:
case 3479:
case 590:
case 780:
case 385:
case 2885:
case 1211:
case 1574:
case 881:
case 3767:
case 2054:
case 956:
case 1884:
case 1474:
case 3352:
case 689:
case 359:
case 362:
case 2271:
case 1415:
case 396:
case 94:
case 533:
case 2822:
case 1515:
case 3151:
case 2957:
case 2737:
case 360:
case 4005:
case 765:
case 2370:
case 627:
case 3175:
case 2789:
case 1841:
case 3688:
case 1157:
case 293:
case 2179:
case 328:
case 3785:
case 275:
case 920:
case 1533:
case 2760:
case 1371:
case 200:
case 1433:
case 3323:
case 2724:
case 1809:
case 1010:
case 1782:
case 1083:
case 3377:
case 3998:
case 3568:
case 3654:
case 3950:
case 2576:
case 1829:
case 1270:
case 922:
case 3148:
case 2886:
case 2476:
case 504:
case 1206:
case 2500:
case 2382:
case 3625:
case 1686:
case 3495:
case 561:
case 2817:
case 2969:
case 151:
case 2599:
case 1194:
case 2144:
case 2237:
case 3987:
case 1135:
case 3605:
case 3708:
case 2464:
case 2520:
case 3041:
case 873:
case 895:
case 225:
case 2935:
case 378:
case 2755:
case 2994:
case 7:
case 3507:
case 3132:
case 2005:
case 2260:
case 1602:
case 3407:
case 2306:
case 3058:
case 493:
case 475:
case 3331:
case 3810:
case 1282:
case 636:
case 753:
case 1691:
case 3090:
case 1501:
case 4054:
case 2326:
case 2980:
case 3230:
case 135:
case 3029:
case 2204:
case 1180:
case 1770:
case 2442:
case 3856:
case 3527:
case 2025:
case 3697:
case 664:
case 415:
case 575:
case 336:
case 3732:
case 939:
case 910:
case 1866:
case 1892:
case 3456:
case 2842:
case 2615:
case 364:
case 1170:
case 4045:
case 2970:
case 1068:
case 1801:
case 721:
case 2357:
case 502:
case 2019:
case 109:
case 3834:
case 3251:
case 2517:
case 1849:
case 461:
case 2899:
case 3074:
case 2372:
case 4036:
case 3316:
case 3275:
case 2820:
case 377:
case 4078:
case 617:
case 2864:
case 678:
case 1257:
case 318:
case 1735:
case 1955:
case 3350:
case 1794:
case 2633:
case 500:
case 3108:
case 1664:
case 1246:
case 2453:
case 2369:
case 1073:
case 1458:
case 1960:
case 3021:
case 2540:
case 2078:
case 2160:
case 2982:
case 1833:
case 1409:
case 3066:
case 2104:
case 1280:
case 1699:
case 3092:
case 2218:
case 1529:
case 2486:
case 1344:
case 3339:
case 835:
case 1429:
case 3812:
case 3645:
case 404:
case 3748:
case 2586:
case 1600:
case 3001:
case 3130:
case 2262:
case 3547:
case 2045:
case 662:
case 389:
case 2692:
case 3751:
case 3931:
case 2281:
case 301:
case 1815:
case 2906:
case 3049:
case 1269:
case 841:
case 1874:
case 2346:
case 4063:
case 2601:
case 3636:
case 1584:
case 986:
case 3167:
case 327:
case 2591:
case 1541:
case 2961:
case 628:
case 1362:
case 1126:
case 1937:
case 1441:
case 215:
case 2779:
case 2137:
case 2502:
case 1235:
case 2926:
case 2402:
case 2313:
case 1719:
case 1307:
case 2295:
case 3613:
case 1245:
case 2147:
case 2234:
case 46:
case 18:
case 1531:
case 769:
case 2069:
case 466:
case 1947:
case 1431:
case 2378:
case 3321:
case 2875:
case 2485:
case 3301:
case 3589:
case 355:
case 685:
case 2585:
case 3264:
case 3646:
case 750:
case 3879:
case 973:
case 2094:
case 3102:
case 1632:
case 3437:
case 2273:
case 458:
case 547:
case 3909:
case 2046:
case 870:
case 167:
case 1278:
case 798:
case 557:
case 3153:
case 2345:
case 2639:
case 2207:
case 3958:
case 3524:
case 3460:
case 1018:
case 726:
case 3776:
case 1843:
case 3186:
case 1898:
case 2848:
case 2430:
case 1236:
case 72:
case 872:
case 1423:
case 4013:
case 909:
case 124:
case 3333:
case 1523:
case 3799:
case 737:
case 84:
case 814:
case 306:
case 287:
case 3455:
case 1577:
case 2559:
case 3764:
case 2363:
case 4046:
case 3672:
case 1079:
case 1887:
case 923:
case 1503:
case 1312:
case 1839:
case 2110:
case 1452:
case 2072:
case 290:
case 1552:
case 3016:
case 2832:
case 234:
case 139:
case 2319:
case 2707:
case 3238:
case 363:
case 4035:
case 3043:
case 776:
case 26:
case 519:
case 3098:
case 112:
case 2727:
case 292:
case 594:
case 266:
case 2268:
case 4069:
case 3862:
case 1724:
case 1538:
case 100:
case 3805:
case 2533:
case 1438:
case 2083:
case 3116:
case 2010:
case 2355:
case 3563:
case 338:
case 637:
case 3198:
case 791:
case 2270:
case 441:
case 509:
case 3825:
case 4047:
case 1576:
case 1704:
case 3150:
case 2829:
case 3143:
case 994:
case 2474:
case 676:
case 1054:
case 804:
case 435:
case 2515:
case 67:
case 3017:
case 3223:
case 31:
case 3419:
case 3656:
case 2415:
case 354:
case 1271:
case 932:
case 1370:
case 1737:
case 1957:
case 2979:
case 213:
case 1802:
case 3203:
case 3610:
case 193:
case 2841:
case 3683:
case 1224:
case 2996:
case 640:
case 413:
case 2602:
case 650:
case 2466:
case 785:
case 3053:
case 3367:
case 1641:
case 3578:
case 3932:
case 2146:
case 3888:
case 2918:
case 3436:
case 1442:
case 3086:
case 652:
case 2113:
case 1361:
case 382:
case 2492:
case 1204:
case 2962:
case 1118:
case 642:
case 2592:
case 626:
case 2169:
case 2981:
case 1400:
case 1181:
case 3022:
case 1629:
case 1599:
case 1817:
case 2324:
case 1969:
case 4056:
case 3545:
case 2449:
case 2360:
case 3139:
case 815:
case 1144:
case 1237:
case 2135:
case 698:
case 2304:
case 3811:
case 3330:
case 2944:
case 947:
case 988:
case 1564:
case 1420:
case 125:
case 1935:
case 3091:
case 3777:
case 4083:
case 957:
case 2653:
case 1520:
case 1945:
case 3284:
case 2934:
case 3067:
case 2754:
case 3469:
case 2995:
case 879:
case 3999:
case 3569:
case 1006:
case 671:
case 3604:
case 3149:
case 311:
case 422:
case 2297:
case 1195:
case 1305:
case 3494:
case 2539:
case 3920:
case 1061:
case 1808:
case 3386:
case 2037:
case 2587:
case 205:
case 1026:
case 2877:
case 3209:
case 3166:
case 2024:
case 2347:
case 2205:
case 270:
case 1978:
case 1107:
case 3689:
case 3121:
case 2178:
case 2852:
case 1173:
case 2788:
case 3258:
case 760:
case 365:
case 2685:
case 796:
case 759:
case 2927:
case 749:
case 586:
case 456:
case 44:
case 2225:
case 3870:
case 4071:
case 574:
case 3413:
case 3229:
case 3580:
case 45:
case 194:
case 2254:
case 3784:
case 299:
case 829:
case 3806:
case 3174:
case 2831:
case 25:
case 621:
case 4004:
case 3115:
case 2797:
case 472:
case 3028:
case 130:
case 119:
case 214:
case 512:
case 1747:
case 470:
case 3861:
case 858:
case 343:
case 1514:
case 539:
case 510:
case 848:
case 353:
case 683:
case 2211:
case 3557:
case 993:
case 607:
case 803:
case 1652:
case 717:
case 4037:
case 2705:
case 2608:
case 778:
case 2659:
case 3882:
case 2516:
case 1210:
case 2288:
case 3572:
case 2416:
case 405:
case 268:
case 2163:
case 2912:
case 1168:
case 1070:
case 2968:
case 902:
case 524:
case 3671:
case 1493:
case 2543:
case 3729:
case 1593:
case 1623:
case 3727:
case 3212:
case 1570:
case 969:
case 2742:
case 2276:
case 1470:
case 1880:
case 3268:
case 4065:
case 366:
case 392:
case 445:
case 1721:
case 390:
case 3072:
case 585:
case 3110:
case 3773:
case 2374:
case 1846:
case 263:
case 3988:
case 3319:
case 3707:
case 4039:
case 334:
case 950:
case 3832:
case 843:
case 3459:
case 688:
case 2555:
case 647:
case 3363:
case 1075:
case 348:
case 1014:
case 808:
case 303:
case 431:
case 3911:
case 1376:
case 3408:
case 998:
case 2844:
case 1338:
case 3643:
case 1215:
case 2117:
case 92:
case 20:
case 2471:
case 2333:
case 329:
case 3795:
case 3698:
case 2571:
case 3528:
case 2700:
case 1274:
case 1869:
case 1917:
case 3848:
case 3712:
case 2504:
case 1129:
case 1681:
case 1364:
case 709:
case 591:
case 3530:
case 406:
case 1201:
case 3925:
case 1190:
case 1300:
case 2153:
case 3905:
case 2909:
case 3046:
case 1158:
case 3687:
case 2460:
case 2694:
case 1399:
case 231:
case 1644:
case 2738:
case 3207:
case 2424:
case 865:
case 1032:
case 2990:
case 3345:
case 1953:
case 1733:
case 1526:
case 1902:
case 255:
case 2087:
case 2589:
case 107:
case 2191:
case 1426:
case 2301:
case 1141:
case 2941:
case 1561:
case 463:
case 183:
case 4043:
case 2122:
case 97:
case 1249:
case 2680:
case 2984:
case 3234:
case 2613:
case 619:
case 3295:
case 976:
case 2321:
case 811:
case 1406:
case 1184:
case 2065:
case 1774:
case 1922:
case 3467:
case 2185:
case 315:
case 3779:
case 1064:
case 3491:
case 1673:
case 675:
case 693:
case 436:
case 907:
case 1020:
case 3591:
case 227:
case 3666:
case 1985:
case 3137:
case 983:
case 3502:
case 1497:
case 3906:
case 921:
case 3522:
case 2447:
case 1627:
case 1597:
case 289:
case 2547:
case 1819:
case 3422:
case 464:
case 1000:
case 1131:
case 602:
case 3586:
case 2339:
case 1695:
case 1525:
case 1798:
case 3486:
case 361:
case 4015:
case 3335:
case 2092:
case 1042:
case 3104:
case 882:
case 3262:
case 724:
case 4074:
case 2387:
case 2001:
case 2868:
case 2021:
case 517:
case 2365:
case 3553:
case 1716:
case 3369:
case 3838:
case 600:
case 1505:
case 3160:
case 2232:
case 218:
case 1511:
case 3279:
case 3155:
case 625:
case 1908:
case 2275:
case 3820:
case 2214:
case 3633:
case 1103:
case 198:
case 767:
case 816:
case 1123:
case 971:
case 3517:
case 2128:
case 2834:
case 1612:
case 3417:
case 2895:
case 304:
case 81:
case 4001:
case 844:
case 2663:
case 3372:
case 2923:
case 559:
case 489:
case 2556:
case 2248:
case 562:
case 264:
case 1314:
case 596:
case 1298:
case 2456:
case 1243:
case 3842:
case 549:
case 333:
case 3718:
case 786:
case 142:
case 4049:
case 2293:
case 774:
case 3357:
case 3063:
case 78:
case 1836:
case 1152:
case 427:
case 1878:
case 236:
case 2873:
case 2483:
case 1588:
case 140:
case 2807:
case 560:
case 2033:
case 150:
case 2732:
case 2952:
case 4067:
case 3912:
case 3550:
case 571:
case 411:
case 2729:
case 1804:
case 3543:
case 2671:
case 322:
case 3443:
case 3608:
case 725:
case 3705:
case 2317:
case 2709:
case 1824:
case 1138:
case 2572:
case 3288:
case 667:
case 3516:
case 2882:
case 1753:
case 863:
case 1740:
case 253:
case 1003:
case 3356:
case 960:
case 243:
case 2008:
case 2457:
case 1889:
case 1479:
case 185:
case 2:
case 928:
case 2557:
case 2826:
case 208:
case 465:
case 3211:
case 3831:
case 2806:
case 1915:
case 99:
case 399:
case 356:
case 686:
case 80:
case 959:
case 962:
case 314:
case 1670:
case 674:
case 996:
case 3119:
case 2115:
case 949:
case 1974:
case 68:
case 3136:
case 2101:
case 1462:
case 1992:
case 2030:
case 1606:
case 2942:
case 2580:
case 1901:
case 4028:
case 372:
case 2870:
case 2480:
case 4008:
case 793:
case 775:
case 3205:
case 370:
case 1661:
case 3347:
case 443:
case 2209:
case 453:
case 2322:
case 265:
case 3685:
case 408:
case 3788:
case 2546:
case 1626:
case 2290:
case 2446:
case 2121:
case 831:
case 4059:
case 2689:
case 1240:
case 3803:
case 1544:
case 3037:
case 845:
case 2624:
case 2386:
case 2660:
case 3877:
case 3487:
case 1855:
case 978:
case 3587:
case 305:
case 1164:
case 3711:
case 2569:
case 1358:
case 2999:
case 702:
case 3995:
case 3754:
case 2353:
case 1390:
case 1871:
case 2900:
case 3145:
case 624:
case 3297:
case 1222:
case 3823:
case 1581:
case 1717:
case 1199:
case 1309:
case 2149:
case 3194:
case 1708:
case 297:
case 1605:
case 3261:
case 3653:
case 2777:
case 2091:
case 1759:
case 1939:
case 117:
case 3944:
case 3226:
case 2811:
case 3981:
case 3169:
case 889:
case 1267:
case 1084:
case 537:
case 2165:
case 2854:
case 3360:
case 1625:
case 3449:
case 2545:
case 3047:
case 609:
case 3686:
case 3324:
case 2723:
case 1495:
case 351:
case 1434:
case 681:
case 576:
case 3501:
case 416:
case 1230:
case 3401:
case 2436:
case 719:
case 335:
case 3918:
case 3622:
case 1029:
case 444:
case 4017:
case 3180:
case 41:
case 2086:
case 1697:
case 1856:
case 1527:
case 3466:
case 1132:
case 1009:
case 1407:
case 3996:
case 2888:
case 2478:
case 1573:
case 1331:
case 732:
case 3146:
case 1058:
case 2752:
case 3691:
case 2578:
case 3521:
case 2932:
case 1090:
case 2053:
case 2367:
case 2203:
case 695:
case 3979:
case 877:
case 160:
case 2975:
case 818:
case 550:
case 2914:
case 2683:
case 4053:
case 2277:
case 3841:
case 1785:
case 128:
case 3157:
case 985:
case 1688:
case 3726:
case 2731:
case 19:
case 3574:
case 216:
case 3474:
case 1847:
case 159:
case 196:
case 4086:
case 1151:
case 2359:
case 526:
case 1998:
case 2948:
case 2463:
case 2993:
case 1943:
case 3355:
case 2563:
case 1468:
case 3617:
case 2150:
case 1412:
case 1148:
case 3270:
case 3056:
case 2308:
case 3533:
case 2805:
case 497:
case 3433:
case 4002:
case 836:
case 598:
case 3172:
case 3890:
case 4091:
case 3782:
case 2252:
case 83:
case 3083:
case 3280:
case 2042:
case 2750:
case 1793:
case 3699:
case 2525:
case 1339:
case 3027:
case 2695:
case 2798:
case 3600:
case 729:
case 1130:
case 3664:
case 3490:
case 1365:
case 3458:
case 3590:
case 2716:
case 703:
case 3960:
case 1232:
case 3833:
case 3409:
case 787:
case 748:
case 498:
case 3509:
case 1678:
case 945:
case 1775:
case 127:
case 3541:
case 2020:
case 955:
case 2673:
case 3126:
case 2064:
case 2287:
case 3441:
case 3757:
case 2985:
case 817:
case 4038:
case 440:
case 450:
case 580:
case 2239:
case 878:
case 189:
case 2967:
case 3034:
case 2819:
case 1547:
case 452:
case 3095:
case 2627:
case 101:
case 1931:
case 1447:
case 1751:
case 3815:
case 3269:
case 3106:
case 3396:
case 2131:
case 3484:
case 1167:
case 3584:
case 276:
case 1636:
case 2000:
case 3780:
case 1293:
case 1456:
case 2243:
case 1619:
case 3012:
case 554:
case 2298:
case 1556:
case 1248:
case 1827:
case 3713:
case 164:
case 2314:
case 3068:
case 476:
case 4000:
case 2375:
case 516:
case 2836:
case 3379:
case 2588:
case 1873:
case 1510:
case 1583:
case 2488:
case 4020:
case 2216:
case 1410:
case 1952:
case 1732:
case 1807:
case 3866:
case 240:
case 963:
case 2038:
case 2908:
case 177:
case 1903:
case 118:
case 323:
case 3955:
case 3735:
case 1343:
case 3794:
case 1108:
case 1398:
case 1977:
case 2739:
case 1895:
case 1128:
case 641:
case 1834:
case 309:
case 2612:
case 2845:
case 3849:
case 1251:
case 90:
case 2123:
case 651:
case 1923:
case 3769:
case 538:
case 1074:
case 862:
case 1663:
case 437:
case 906:
case 2928:
case 2668:
case 2765:
case 2554:
case 1672:
case 1764:
case 1555:
case 918:
case 3887:
case 1844:
case 2894:
case 3312:
case 4032:
case 3423:
case 3648:
case 1333:
case 3745:
case 2749:
case 3693:
case 3523:
case 1881:
case 2215:
case 2274:
case 106:
case 761:
case 3865:
case 2470:
case 2880:
case 1050:
case 1276:
case 1742:
case 964:
case 312:
case 2701:
case 3736:
case 3956:
case 3263:
case 3452:
case 2846:
case 1374:
case 2679:
case 5:
case 2721:
case 3552:
case 3675:
case 407:
case 1016:
case 670:
case 3983:
case 2233:
case 1238:
case 483:
case 2141:
case 1301:
case 2426:
case 207:
case 1646:
case 2902:
case 1087:
case 1264:
case 155:
case 1489:
case 1879:
case 2696:
case 2857:
case 565:
case 2342:
case 1392:
case 1102:
case 3327:
case 3632:
case 2991:
case 1437:
case 3197:
case 3719:
case 3245:
case 374:
case 2249:
case 4093:
case 901:
case 38:
case 65:
case 1366:
case 3531:
case 2662:
case 2774:
case 3373:
case 3947:
case 1065:
case 1321:
case 471:
case 3850:
case 2681:
case 1242:
case 3843:
case 622:
case 1186:
case 3898:
case 2201:
case 2986:
case 3062:
case 704:
case 1929:
case 2482:
case 3096:
case 2158:
case 2582:
case 2221:
case 3816:
case 4075:
case 367:
case 2190:
case 2300:
case 1153:
case 2733:
case 2953:
case 1560:
case 2032:
case 3105:
case 2940:
case 2399:
case 2109:
case 131:
case 1738:
case 1349:
case 74:
case 3162:
case 2230:
case 49:
case 3684:
case 3913:
case 75:
case 462:
case 589:
case 1647:
case 3361:
case 182:
case 1086:
case 633:
case 3204:
case 3542:
case 449:
case 3118:
case 2407:
case 3946:
case 2009:
case 2507:
case 180:
case 3641:
case 1053:
case 1578:
case 2883:
case 2473:
case 428:
case 2331:
case 3306:
case 3196:
case 197:
case 1139:
case 3609:
case 1703:
case 3994:
case 3935:
case 325:
case 2285:
case 3755:
case 3658:
case 720:
case 1187:
case 2939:
case 3289:
case 1091:
case 3520:
case 2041:
case 3690:
case 3382:
case 3500:
case 1165:
case 87:
case 3400:
case 1022:
case 3629:
case 3181:
case 3969:
case 1723:
case 876:
case 911:
case 2495:
case 3817:
case 3499:
case 2965:
case 3097:
case 2943:
case 869:
case 138:
case 1993:
case 1948:
case 4084:
case 2654:
case 2998:
case 1198:
case 3476:
case 302:
case 2412:
case 1150:
case 3576:
case 2303:
case 1143:
case 3724:
case 3438:
case 1805:
case 2916:
case 577:
case 3840:
case 478:
case 2611:
case 3370:
case 943:
case 260:
case 1975:
case 53:
case 3957:
case 3802:
case 1203:
case 1610:
case 393:
case 3255:
case 4058:
case 770:
case 2259:
case 2175:
case 3789:
case 898:
case 4090:
case 1951:
case 2151:
case 1223:
case 826:
case 1419:
case 11:
case 154:
case 3271:
case 2847:
case 564:
case 1519:
case 259:
case 332:
case 1008:
case 2003:
case 563:
case 2702:
case 108:
case 1826:
case 2579:
case 3475:
case 2479:
case 3575:
case 2077:
case 3652:
case 394:
case 3867:
case 3919:
case 3388:
case 1174:
case 2023:
case 3551:
case 1115:
case 2217:
case 91:
case 319:
case 330:
case 1028:
case 3451:
case 679:
case 938:
case 3311:
case 3830:
case 506:
case 3168:
case 2786:
case 3548:
case 3070:
case 1671:
case 3963:
case 50:
case 3623:
case 3593:
case 2176:
case 1709:
case 1317:
case 2824:
case 3677:
case 1790:
case 2753:
case 3354:
case 1882:
case 2933:
case 1572:
case 1758:
case 3325:
case 1660:
case 997:
case 3808:
case 2444:
case 1435:
case 531:
case 1624:
case 807:
case 1964:
case 1535:
case 2164:
case 388:
case 347:
case 883:
case 3859:
case 357:
case 687:
case 1067:
case 2100:
case 3945:
case 1469:
case 2358:
case 2031:
case 1999:
case 2949:
case 1569:
case 2309:
case 3195:
case 3247:
case 2871:
case 1900:
case 1942:
case 2992:
case 1391:
case 666:
case 2462:
case 2341:
case 3756:
case 2286:
case 3127:
case 2518:
case 1229:
case 1192:
case 66:
case 4023:
case 2142:
case 1580:
case 1166:
case 1637:
case 1322:
case 3432:
case 4003:
case 2661:
case 3397:
case 3107:
case 980:
case 3978:
case 2921:
case 3532:
case 634:
case 4077:
case 545:
case 2240:
case 690:
case 2384:
case 3783:
case 2626:
case 3173:
case 1546:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746810002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,];
var gg_b = "1746810002/";

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
